export const SHOW_ALERT = 'ALERT:SHOW';
export const HIDE_ALERT = 'ALERT:HIDE';

export const ALERT_TYPE_SUCCESS = 'ALERT:TYPE:SUCCESS';
export const ALERT_TYPE_ERROR = 'ALERT:TYPE:ERROR';

export const showAlert = (title: string, message: string, type:string, callback:any) => ({
    type: SHOW_ALERT,
    alert_type: type,
    title,
    message,
    callback
})

export const hideAlert = () => ({
    type: HIDE_ALERT,
})