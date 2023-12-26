import { Dispatch } from "redux";
import { Profile } from "../../interfaces/user.type";
import { showLoader } from './loader.action';
import axios from 'axios';

export const USER_SET_PROFILE = 'USER:USER:SET:PROFILE';
export const USER_SET_DEFAULT= 'USER:USER:SET:DEFAULT';
export const USER_SET_EDIT = 'USER:USER:SET:EDIT';
export const USER_SET_LOGIN = 'USER:USER:SET:LOGIN';

export const Login = (password: string, email: string) => async (dispatch: Dispatch ) => {
    try{
        dispatch(showLoader(true))
        const request = await axios.post(process.env.API + 'user/login', { email: email, password: password })
        const response = request.data.user
        dispatch(setProfile(response))
        dispatch(setLogin(true))
    }catch(error){
        dispatch(showLoader(false))
        console.log('Error al loguearse', error)
    }finally{
        dispatch(showLoader(false))
    }
}

export const RegisterUser = (name: string, email: string, password: string, lastname: string, phone_number: string) => async (dispatch:Dispatch) => {
    try{
        dispatch(showLoader(true))
        let insertUser ={
            name: name,
            email: email,
            password: password,
            lastname: lastname,
            phone_number: phone_number
        }
        await axios.post(process.env.API + 'user/register', insertUser)
    }catch(error){
        console.log('Error al registrarse', error)
    }finally{
        setTimeout(() => {
            dispatch(showLoader(false))
        }, 2000)
    }
}

export const setLogin = (login: boolean) => ({
    type: USER_SET_LOGIN,
    login
})

export const setProfile = (profile:Profile) => ({
    type: USER_SET_PROFILE,
    profile
})

export const setDefault = (user: number) => ({
    type: USER_SET_DEFAULT,
    user
})

export const setEdit = (profile:Profile) => ({
    type: USER_SET_EDIT,
    profile
})
