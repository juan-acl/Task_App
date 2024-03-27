import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

interface Props {
    setEditing: (value: boolean) => void
    editing: boolean,
    data: any
}

const ModalUpdate = (props: Props) => {
    const [value, setValue] = useState(props.data.description);

    const handleChange = (value: string) => {
        if (!value) return
        setValue(value)
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.editing}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    props.setEditing(!props.editing)
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <TextInput value={value} onChangeText={handleChange} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => props.setEditing(!props.editing)}>
                            <Text style={styles.textStyle}>Guardar</Text>
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        margin: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 2
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default ModalUpdate;