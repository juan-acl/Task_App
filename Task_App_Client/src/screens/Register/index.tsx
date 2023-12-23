import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import RegisterComponent from '../../components/Register';
import { Profile, UserAction } from "../../interfaces/user";
import { Login } from '../../redux/actions/user.acctions'
import { Dispatch } from "redux";

const Register = () => {

    return (
        <>
        <Text>Register Screen</Text>
        <RegisterComponent />
        </>
    )
}


export default Register;