import React from "react";
import { connect } from "react-redux";
import { View, Text } from 'react-native';

interface Props {
    profile: []
}

const Login = (props: Props) => {
    console.log('Validando las props desde el login', JSON.stringify(props, null, 2))
    return (
        <>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    profile: state.user.profile
})

export default connect(mapStateToProps, null) (Login)