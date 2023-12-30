// Action reducer
export interface AlertAction {
    type: string,
    isShow: boolean,
    title: string,
    message: string,
}

export interface InitialState {
    isShow: boolean,
    title: string,
    message: string,
}

export interface AlertProps {
    isShow: boolean,
    title: string,
    message: string,
    _showAlert: (title: string, message: string, isShow:boolean) => void,
}

export interface AlertStateToProps {
    alert: {
        isShow: boolean,
        title: string,
        message: string,
    }
}