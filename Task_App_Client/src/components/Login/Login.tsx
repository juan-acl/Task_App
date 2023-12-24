import React from "react";
import { connect } from "react-redux";
import { View, Text } from 'react-native';

interface Props {
    profile: []
}

const Login = (props: Props) => {
    console.log('Validnado las nuevas props con sus types :)', props)
    return (
        <>
        </>
    )
}

const mapStateToProps = (state: any) => ({
    profile: state.user.profile
})

export default connect(mapStateToProps, null) (Login)