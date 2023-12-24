import * as Actions from '../actions/loader.action';
import { LoaderState, LoaderAction } from '../../interfaces/loader.type';

const initialState: LoaderState = {
    isLoading: false
}

export default (state = initialState, action: LoaderAction) => {
    switch(action.type){
        case Actions.SHOW_LOADER:
            return {
                ...state,
                isLoading: action.show
            }
        default:
            return state
    }
}