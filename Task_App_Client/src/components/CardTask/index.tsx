import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    SafeAreaView,
} from 'react-native';
import { connect } from "react-redux";
import { getTaskByUser, deleteTask, addTask } from '../../redux/actions/task.action';
import _ from 'lodash';
import { MaterialIcons } from '@expo/vector-icons';
import Loader from '../Loader';
import ModalUpdate from "../modalUpdateTask/index"

interface TaskUser {
    task_id: number,
    description: string
}

interface StateToProps {
    _getTaskByUser: (id: number) => TaskUser[]
    user: {
        profile: [{ name: string, lastname: string, phone_number: string, email: string, password: string, user_id: number }];
    }
    loader: {
        isLoading: boolean
    }
}

interface Props {
    profile: [{ name: string, lastname: string, phone_number: string, email: string, password: string, user_id: number }];
    _getTaskByUser: (id: number) => TaskUser[]
    _deleteTask: (id: number) => void
    isLoading: boolean
    _addTask: (description: string, user: number) => void
}

const CardTask: React.FC<Props> = (props: Props) => {

    const [task, setTask] = useState('');
    const [taskUser, setTaskUser] = useState<TaskUser[]>([]);
    const [editing, setEditing] = useState(false);
    const [data, setData] = useState([])

    const handleAddTask = async () => {
        if (task.trim() !== '') {
            await props._addTask(task, props.profile[0].user_id)
            getTasksByUser()
            setTask('');
        }
    };

    const handleDeleteTask = async (id: number) => {
        await props._deleteTask(id)
        getTasksByUser()
    }

    const updateTask = (value: any) => {
        setEditing(true)
        setData(value)
    }

    const renderTask = ({ item }: { item: TaskUser }) => {
        return (
            <TouchableOpacity
                style={styles.taskItem}
                onPress={(value) => updateTask(value)}>
                <Text>{item.description}</Text>
                <TouchableOpacity style={styles.delete} onPress={() => handleDeleteTask(item.task_id)}>
                    <MaterialIcons name="delete" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.update} onPress={() => updateTask(item)}>
                    <MaterialIcons name="update" size={24} color="red" />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }

    const getTasksByUser = async () => {
        let response = await props._getTaskByUser(props.profile[0].user_id)
        setTaskUser(response)
    }

    useEffect(() => {
        if (_.isEmpty(props.profile[0])) return
        getTasksByUser()
    }, [props.profile])

    return (
        <>
            {editing && <ModalUpdate setEditing={setEditing} editing={editing} data={data} />}
            {props.isLoading ? <Loader /> : <SafeAreaView style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={task}
                    onChangeText={text => setTask(text)}
                    placeholder="Add a task"
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                    <Text style={styles.buttonText}>Add Task</Text>
                </TouchableOpacity>
                <FlatList
                    data={taskUser}
                    renderItem={renderTask}
                    keyExtractor={item => item.task_id.toString()}
                    style={styles.taskList}
                />
            </SafeAreaView>
            }
        </>
    );
};

const styles = StyleSheet.create({
    update: {
        position: 'absolute',
        right: 40,
        top: 10,
    },
    delete: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginTop: 50,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    taskList: {
        flex: 1,
        marginTop: 10,
    },
    taskItem: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
});

const mapStateToProps = (state: StateToProps) => ({
    profile: state.user.profile,
    isLoading: state.loader.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    _getTaskByUser: (id: number) => dispatch(getTaskByUser(id)),
    _deleteTask: (id: number) => dispatch(deleteTask(id)),
    _addTask: (description: string, user: number) => dispatch(addTask(description, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTask as never);
