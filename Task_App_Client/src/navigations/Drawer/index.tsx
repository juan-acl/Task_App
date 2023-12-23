import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/Home'
import LoginScreen from '../../screens/Login'
import RegisterScreen from '../../screens/Register'

const CreateDrawerNavigation = createDrawerNavigator();

const NavigationDrawer = () => {
    return(
        <CreateDrawerNavigation.Navigator>
            <CreateDrawerNavigation.Screen 
            name='HomeScreen' 
            component={HomeScreen} 
            options={{ title: 'Pagina de inicio'}}
            />
            <CreateDrawerNavigation.Screen
            name='LogIn_Screen'
            component={LoginScreen}
            options={
                { title: 'Iniciar sesion'}
            }
            />
            <CreateDrawerNavigation.Screen
            name='Register_Screen'
            component={RegisterScreen}
            options={
                { title: 'Crear cuenta'}
            }
            />
        </CreateDrawerNavigation.Navigator>
    )
}

export default NavigationDrawer;