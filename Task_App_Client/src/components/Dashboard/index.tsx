import React from 'react';
import { connect } from 'react-redux';
import { PropsDashBoard, MapStateProps } from '../../interfaces/dashboard';
import Home from '../Home';
import TaskHome from '../TaskHome';

const Dashboard: React.FC<PropsDashBoard> = (props: PropsDashBoard) => {
    return (
        <>
        { props.login ? <TaskHome /> : <Home /> }
        </>
    )
}

const mapStateToProps = (state: MapStateProps) => ({
    login: state.user.login
})

export default connect(mapStateToProps, null) (Dashboard);