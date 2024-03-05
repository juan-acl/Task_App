import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import { connect } from "react-redux";
import { showAlert } from '../../redux/actions/alert.action';


const TaskHome: React.FC = (props:any) => {

    return (
        <></>
    )
}

const mapStateToProps = (state: any) => ({
    isShow: state.alert.isShow,
    // message: state.alert.message,
    // type: state.alert.type,
    // callback: state.alert.callback,
    // title: state.alert.title
})

const mapDispatchToProps = (dispatch: any) => ({
    _showAlert: (title: string, message: string ,isShow: boolean) => dispatch(showAlert(title, message, isShow))
})

export default connect(mapStateToProps, mapDispatchToProps) (TaskHome);