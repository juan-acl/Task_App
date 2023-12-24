/* Loader types loader.action */

/* Loader types loader.reducer */
export interface LoaderState {
  isLoading: boolean;
}

export interface LoaderAction {
    type: string,
    show: boolean
}