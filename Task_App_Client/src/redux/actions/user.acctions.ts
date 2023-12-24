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
// TODO: Este servicio va a cambiar porque no pertenece a este action
export const Login = (password: string, email: string) => async (dispatch: Dispatch ) => {
    try{
        const request = await axios.post(process.env.API + 'task/login', { email: 'jchuc@correo.com', password: '1234' })
        const response = request.data.user
        console.log('Validando peticion de redux', response)
        dispatch(setProfile(response))
    }catch(error){
        console.log('Error al obtener mis tareas', error)
    }finally{

    }
}

export const setProfile = (profile:Profile) => ({
    type: USER_SET_PROFILE,
    profile
})

export const setDefault = (user: number) => ({
    type: USER_SET_DEFAULT,
    user
})

export const setEdit = (profile:Profile):UserAction => ({
    type: USER_SET_EDIT,
    profile
})
