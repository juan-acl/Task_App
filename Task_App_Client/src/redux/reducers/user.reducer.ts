import * as ACTION from '../actions/user.acctions';

const initialState = {
    profile: {},
    edit: {},
    default: 0
}

export default (state = initialState, action: any) => {
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