import React from 'react';
import { Text } from 'react-native';
import { connect } from "react-redux";
import Alert from '../Alert';

const TaskHome: React.FC = (props:any) => {

    return (
        <Alert />
    )
}

const mapStateToProps = (state: any) => ({
    // isShow: state.alert.isShow,
    // message: state.alert.message,
    // type: state.alert.type,
    // callback: state.alert.callback,
    // title: state.alert.title
})

const mapDispatchToProps = (dispatch: any) => ({
    // _hideAlert: () => dispatch(Actions.hideAlert())
})

export default connect(mapStateToProps, null) (TaskHome);