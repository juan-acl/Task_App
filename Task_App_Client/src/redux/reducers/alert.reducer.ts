import * as Actions from '../actions/alert.action';

const initialState = {
    isShow: false,
    type: '',
    title: '',
    message: '',
    callback: () => {}
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case Actions.SHOW_ALERT:
            return {
                ...state,
                isShow: true,
                type: action.alert_type,
                title: action.title,
                message: action.message,
                callback: action.callback
            }
        case Actions.HIDE_ALERT:
            return {
                ...state,
                isShow: false,
                type: '',
                title: '',
                message: '',
                callback: () => {}
            }
        default:
            return state;
    }
}