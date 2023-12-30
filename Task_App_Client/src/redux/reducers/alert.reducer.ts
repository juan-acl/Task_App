import * as Actions from '../actions/alert.action';
import { AlertAction, InitialState } from '../../interfaces/alert.type';

const initialState: InitialState = {
    isShow: false,
    title: '',
    message: '',
}

export default (state = initialState, action: AlertAction) => {
    switch(action.type) {
        case Actions.SHOW_ALERT:
            return {
                ...state,
                isShow: action.isShow,
                title: action.title,
                message: action.message,
            }
        default:
            return state;
    }
}