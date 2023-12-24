import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import RegisterComponent from '../../components/Register';

const Register = () => {

    return (
        <>
        <Text>Register Screen</Text>
        <RegisterComponent />
        </>
    )
}


export default Register;