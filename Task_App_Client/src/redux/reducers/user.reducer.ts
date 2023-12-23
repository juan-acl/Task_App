import * as ACTION from '../actions/user.acctions';

interface SetDefaultAction {
    type: typeof ACTION,
    default: number
}

const initialState= {
    profile: {},
    edit: {},
    default: 0
}

export const UserReducer = (state = initialState, action) => {
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
        default: 
            return state
    }
}