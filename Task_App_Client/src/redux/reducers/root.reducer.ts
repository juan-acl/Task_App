import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import LoaderReducer from './loader.reducer'
import alertReducer from './alert.reducer';

const rootReducer = combineReducers({
    user: UserReducer,
    loader: LoaderReducer,
    alert: alertReducer
})

export default rootReducer;