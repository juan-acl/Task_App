import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import { Profile, UserAction } from "../../interfaces/user";
import { Login } from '../../redux/actions/user.acctions'
import { Dispatch } from "redux";
import { connect } from "react-redux";

interface User {
    user_id: number,
    name: string,
    lastname: string,
    phone_number: string,
    email: string
}

interface Props {
    _login: (password: string, email: string) => void,
}

const Register: React.FC = (props: Props) => {
    const [data, setData] = useState<User[]>([]);

    const getTask = async () => {
        console.log('Validando las props', props)
        props._login('1234', 'jchuc@correo.com')
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

const mapStateToProps = (state: any)  => ({
    profile: state.user.profile
})

const mapDispatchToProps = (dispatch: any) => ({
    _login: (password: string, email: string) => dispatch(Login(password, email))
})

export default connect(mapStateToProps, mapDispatchToProps) (Register);