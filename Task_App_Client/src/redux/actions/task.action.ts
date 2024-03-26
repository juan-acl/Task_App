import Axios from 'axios';
import { Dispatch } from 'redux';
import { showLoader } from './loader.action';

export const getTaskByUser = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader(true));
        const response = await Axios.post(process.env.API + 'task/taskByUser', { user: id });
        return response.data.tasks;
    } catch (error) {
        console.error('Error getting tasks:', error);
        return []
    } finally {
        dispatch(showLoader(false));
    }
}