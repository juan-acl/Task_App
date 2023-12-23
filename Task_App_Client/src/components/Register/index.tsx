import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

interface User {
    user_id: number,
    name: string,
    lastname: string,
    phone_number: string,
    email: string
}

const Register: React.FC = () => {
    const [data, setData] = useState<User[]>([]);

    const getTask = async () => {
        try{
            console.log('Variables de entorno', process.env.API)
            const request = await axios.post(process.env.API + 'task/taskByUser', { user: 1 });
            const response = request.data;
            setData(response);
            console.log('Esta es la data que nos devuelve', JSON.stringify(response, null, 2))
        }catch(error){
            console.log('Error en la peticion', error)
        }
    }

    useEffect(() => {
        getTask();
    }, []);

    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Register;