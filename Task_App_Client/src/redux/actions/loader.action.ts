export const SHOW_LOADER = 'LOADER:SHOW';

export const showLoader = (show: boolean) => ({
    type: SHOW_LOADER,
    show
})