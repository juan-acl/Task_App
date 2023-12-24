import { combineReducers } from 'redux';
import UserReducer from './user.reducer';
import LoaderReducer from './loader.reducer'
import { RootState } from '../../interfaces/user.type';

const rootReducer = combineReducers({
    user: UserReducer,
    loader: LoaderReducer
})

export default rootReducer;