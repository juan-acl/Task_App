/* User types user.action */
export interface Profile  {
    user_id: number,
    name: string,
    lastname: string,
    phone_number: string,
    email: string
}

/* User types user.reducer */
export interface UserAction {
    type: string,
    default: number
    profile: [],
    edit: [],
    login: boolean
}

export interface UserState {
    profile: [];
    edit: [];
    default: number;
    login: boolean;
}

/* Props in component */
export interface UserProps {
    _register: (name: string, email: string, password: string, lastname: string, phone_number: string) => void;
    _showLoader: (show: boolean) => void;
}

/* Types mapStateToProps */
export interface State {
    user: {
        login: boolean
    }
}


