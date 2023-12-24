/* Loader types loader.action */

/* Loader types loader.reducer */
export interface LoaderState {
  isLoading: boolean;
}

export interface LoaderAction {
    type: string,
    show: boolean
}

/* Props types in component */
export interface LoaderProps {
    isLoading: boolean
}

/* MapStateToProps types */

export interface State {
  loader: {
    isLoading: boolean;
  };
}