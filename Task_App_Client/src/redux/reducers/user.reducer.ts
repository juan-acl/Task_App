import * as ACTION from '../actions/user.acctions';
import { UserState, UserAction } from '../../interfaces/user.type';

const initialState: UserState = {
    profile: [],
    edit: [],
    default: 0,
    login: false
}

export default (state = initialState, action: UserAction ) => {
    switch(action.type) {
        case ACTION.USER_SET_DEFAULT: 
            return {
                ...state,
                default: action.default
            }
        case ACTION.USER_SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case ACTION.USER_SET_EDIT:
            return {
                ...state,
                edit: action.edit
            }
        case ACTION.USER_SET_LOGIN:
            return {
                ...state,
                login: action.login
            }
        default: 
            return state
    }
}