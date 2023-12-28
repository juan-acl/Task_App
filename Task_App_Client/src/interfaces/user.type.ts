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
    isLoading: boolean;
}

export interface UserLoginProps {
    isLoading: boolean;
    _login: (password: string, email: string) => {success: boolean, message: string};
    _showLoader: (show: boolean) => void;
}

/* Types mapStateToProps */
export interface State {
    user: {
        login: boolean
    }
}

export interface LogOutProps {
    profile: [{name: string, lastname: string, phone_number: string, email:string, password: string}];
    _logout: () => void;
    isLoading: boolean;
}


