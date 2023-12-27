import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { MapStateProps } from '../../interfaces/dashboard';
import HomeScreen from '../../screens/Home'
import LoginScreen from '../../screens/Login'
import RegisterScreen from '../../screens/Register'
import Profile from '../../screens/Profile';

const CreateDrawerNavigation = createDrawerNavigator();

const NavigationDrawer = (props: any) => {
    return(
        <CreateDrawerNavigation.Navigator>
            <CreateDrawerNavigation.Screen 
                name='HomeScreen' 
                component={HomeScreen} 
                options={
                    { title: props.login ? 'Dashboard' : 'Pagina de inicio'}
                }
            />
            { props.login ? null : 
                <CreateDrawerNavigation.Screen
                    name='LogIn_Screen'
                    component={LoginScreen}
                    options={
                        { title: 'Iniciar sesion'}
                    }
                />
            }
            { props.login ? 
                <CreateDrawerNavigation.Screen
                    name='Profile_Screen'
                    component={Profile}
                    options={
                        { title: 'Perfil' }
                    }
                />
             : 
                <CreateDrawerNavigation.Screen
                    name='Register_Screen'
                    component={RegisterScreen}
                    options={
                        { title: 'Crear cuenta'}
                    }
                />
             }
        </CreateDrawerNavigation.Navigator>
    )
}

const mapStateToProps = (state: MapStateProps) => ({
    login: state.user.login
})

export default connect(mapStateToProps, null) (NavigationDrawer);