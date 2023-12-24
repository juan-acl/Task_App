import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import LoaderReducer from './loader.reducer'

const rootReducer = combineReducers({
    user: UserReducer,
    loader: LoaderReducer
})

export default rootReducer;