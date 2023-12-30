import { LoaderState } from './loader.type';
import { UserState } from './user.type';
import { InitialState } from './alert.type'

// * Combiantions all types
export interface RootState {
  user: UserState;
  loader: LoaderState;
  alert: InitialState;
}