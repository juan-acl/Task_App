export const SHOWS = 'ALERT:SHOW';

export const showAlert = (title: string, message: string, isShow: boolean) => ({
    type: SHOWS,
    title,
    message,
    isShow
})
