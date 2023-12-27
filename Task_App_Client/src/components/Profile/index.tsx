import React from 'react';
import { Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { LogOut } from '../../redux/actions/user.acctions';
import { LogOutProps } from '../../interfaces/user.type';
import Loader from '../Loader';

const ProfileComponent: React.FC<LogOutProps> = (props: LogOutProps) => {
    return (
        <>
        { props.isLoading ? <Loader /> : 
                <><Text>Cerrar seSion</Text><Button title='Cerrar sesion' onPress={() => props._logout()} /></>
        }
        </>
    )
}

const mapStateToProps = (state: any) => ({
    profile: state.user.profile,
    isLoading: state.loader.isLoading
})

const mapDispatchToProps = (dispatch: any) => ({
    _logout: () => dispatch(LogOut())
})

export default connect(mapStateToProps, mapDispatchToProps) (ProfileComponent);