import { Dispatch } from "redux";
import { Profile } from "../../interfaces/user.type";
import { showLoader } from './loader.action';
import { showAlert } from "./alert.action";
import axios from 'axios';

export const USER_SET_PROFILE = 'USER:USER:SET:PROFILE';
export const USER_SET_DEFAULT = 'USER:USER:SET:DEFAULT';
export const USER_SET_EDIT = 'USER:USER:SET:EDIT';
export const USER_SET_LOGIN = 'USER:USER:SET:LOGIN';

export const Login = (password: string, email: string) => async (dispatch: Dispatch) => {
    dispatch(showLoader(true));
    try {
        let isLogin = false
        const response_user = await axios.post(process.env.API + 'user/login', { password, email });
        if (response_user.data.user.length === 0) {
            setTimeout(() => {
                dispatch(showLoader(false));
            }, 2000);
            isLogin = false
        } else {
            setTimeout(() => {
                dispatch(setLogin(true));
                dispatch(setProfile(response_user.data.user));
                dispatch(showLoader(false));
            }, 2000);
            isLogin = true
        }
        return isLogin
    } catch (error) {
        console.error('Error during login:', error);
        dispatch(showLoader(false));
        return false
    }
};


export const RegisterUser = (name: string, email: string, password: string, lastname: string, phone_number: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader(true))
        let insertUser = {
            name: name,
            email: email,
            password: password,
            lastname: lastname,
            phone_number: phone_number
        }
        await axios.post(process.env.API + 'user/register', insertUser)
    } catch (error) {
        console.log('Error al registrarse', error)
    } finally {
        setTimeout(() => {
            dispatch(showLoader(false))
        }, 2000)
    }
}

export const LogOut = () => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader(true))
    } catch (error) {
        console.log('Error al cerrar la sesion', error)
    } finally {
        setTimeout(() => {
            dispatch(setLogin(false))
            dispatch(showLoader(false))
        }, 2000)
    }
}

export const setLogin = (login: boolean) => ({
    type: USER_SET_LOGIN,
    login
})

export const setProfile = (profile: Profile) => ({
    type: USER_SET_PROFILE,
    profile
})

export const setDefault = (user: number) => ({
    type: USER_SET_DEFAULT,
    user
})

export const setEdit = (profile: Profile) => ({
    type: USER_SET_EDIT,
    profile
})
