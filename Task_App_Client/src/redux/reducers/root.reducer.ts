import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import LoaderReducer from './loader.reducer';
import AlertReducer from './alert.reducer'

const rootReducer = combineReducers({
    user: UserReducer,
    loader: LoaderReducer,
    alert: AlertReducer
})

export default rootReducer;