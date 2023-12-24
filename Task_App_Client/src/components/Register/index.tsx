import React, { useState } from 'react';
import { View } from 'react-native';
import { RegisterUser } from '../../redux/actions/user.acctions'
import { UserProps } from '../../interfaces/user.type';
import { connect } from "react-redux";

const Register: React.FC<UserProps> = (props: UserProps) => {
    const [data, setData] = useState({
        user_id: 0,
        name: 'Juan',
        lastname: '',
        phone_number: '',
        email: ''
    });
    console.log('Validando las props de el usuario', props)
    return (
        <View>
        </View>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    _register: (name: string, email: string, password: string, lastname: string, phone_number: string) => dispatch(RegisterUser(name, email, password, lastname, phone_number))
})

export default connect(null, mapDispatchToProps)(Register);