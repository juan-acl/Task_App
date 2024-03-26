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
import { getTaskByUser } from '../../redux/actions/task.action';
import _ from 'lodash';
import { Timespan } from 'react-native/Libraries/Utilities/IPerformanceLogger';

interface Task {
    id: number,
    title: string
}

interface TaskUser {
    task_id: number,
    description: string
}

interface StateToProps {
    _getTaskByUser: (id: number) => TaskUser[]
    user: {
        profile: [{ name: string, lastname: string, phone_number: string, email: string, password: string, user_id: number }];
    }
}

interface Props {
    profile: [{ name: string, lastname: string, phone_number: string, email: string, password: string, user_id: number }];
    _getTaskByUser: (id: number) => TaskUser[]
}

const CardTask: React.FC<Props> = (props: Props) => {

    const [task, setTask] = useState('');
    const [taskUser, setTaskUser] = useState<TaskUser[]>([]);

    const handleAddTask = () => {
        if (task.trim() !== '') {
            // setTaskList([...taskList, { id: Date.now(), title: task }]);
            setTask('');
        }
    };

    const renderTask = ({ item }: { item: TaskUser }) => {
        console.log("Estamos valirandaod", { item })
        return (
            <TouchableOpacity
                style={styles.taskItem}
                onPress={() => { }}>
                <Text>{item.description}</Text>
            </TouchableOpacity>
        );
    }

    const getTasksByUser = async () => {
        let response = await props._getTaskByUser(props.profile[0].user_id)
        console.log("Estamos validando", response)
        setTaskUser(response)
    }

    useEffect(() => {
        if (_.isEmpty(props.profile[0])) return
        getTasksByUser()
    }, [props.profile])

    return (
        <SafeAreaView style={styles.container}>
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
                //keyExtractor={item => item.id.toString()}
                style={styles.taskList}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
})

const mapDispatchToProps = (dispatch: any) => ({
    _getTaskByUser: (id: number) => dispatch(getTaskByUser(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardTask as never);
