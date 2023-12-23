import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import RegisterComponent from '../../components/Register';
import { Profile, UserAction } from "../../interfaces/user";

interface Props {
    default: number
}

const Register = (props: Props ) => {
    console.log('Validando las props', JSON.stringify(props, null, 2))
    return (
        <>
        <Text>Register Screen</Text>
        <RegisterComponent />
        </>
    )
}

const mapStateToProps = (state: any)  => ({
    user: state.user.default
})

export default connect(mapStateToProps, null)(Register);