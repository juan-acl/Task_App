export const SHOW_ALERT = 'ALERT:SHOW';

export const showAlert = (title: string, message: string, isShow: boolean ) => ({
    type: SHOW_ALERT,
    title,
    message,
    isShow
})
