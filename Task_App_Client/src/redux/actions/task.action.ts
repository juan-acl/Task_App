import Axios from 'axios';
import { Dispatch } from 'redux';
import { showLoader } from './loader.action';

export const getTaskByUser = (id: number) => async (dispatch: Dispatch) => {
    try {
        // dispatch(showLoader(true));
        const response = await Axios.post(process.env.API + 'task/taskByUser', { user: id });
        return response.data.tasks;
    } catch (error) {
        console.error('Error getting tasks:', error);
        return []
    } finally {
        // dispatch(showLoader(false));
    }
}

export const addTask = (description: string, user: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader(true));
        const updateAt = new Date().toISOString().slice(0, 19).replace('T', ' ')
        await Axios.post(process.env.API + 'task/insertTask', { description, user, updateAt });
    } catch (error) {
        console.error('Error adding task:', error);
    } finally {
        dispatch(showLoader(false));
    }
}

export const deleteTask = (id: number) => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader(true));
        await Axios.post(process.env.API + 'task/deleteTask', { id_task: id });
    } catch (error) {
        console.error('Error deleting task:', error);
    } finally {
        dispatch(showLoader(false));
    }
}

export const updateTask = (id_task: number, description: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(showLoader(true));
        const updateAt = new Date().toISOString().slice(0, 19).replace('T', ' ')
        await Axios.post(process.env.API + 'task/updateTask', { id_task, description, updateAt });
    } catch (error) {
        console.error('Error updating task:', error);
    } finally {
        dispatch(showLoader(false));
    }
}