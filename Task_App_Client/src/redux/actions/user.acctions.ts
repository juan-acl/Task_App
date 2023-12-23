import { Dispatch } from "redux";
import axios from 'axios';

export const USER_SET_PROFILE = 'USER:USER:SET:PROFILE';
export const USER_SET_DEFAULT= 'USER:USER:SET:DEFAULT';
export const USER_SET_EDIT = 'USER:USER:SET:EDIT';

interface Profile  {
    user_id: number,
    name: string,
    lastname: string,
    phone_number: string,
    email: string
}

interface UserAction {
    type: string,
    profile: Profile

}

export const getProfile = (id: Number) => async (dispatch: Dispatch ) => {
    try{
        const request = await axios.post(process.env.API + 'task/')
        
    }catch(error){
        console.log('Error al obtener mis tareas', error)
    }finally{

    }
}

export const setProfile = (profile:Profile):UserAction => ({
    type: USER_SET_PROFILE,
    profile
})

export const setDefault = (user: number) => ({
    type: USER_SET_DEFAULT,
    user
})