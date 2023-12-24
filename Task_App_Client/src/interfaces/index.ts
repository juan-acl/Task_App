import { LoaderState } from './loader.type';
import { UserState } from './user.type';

// * Combiantions all types
export interface RootState {
  user: UserState;
  loader: LoaderState;
}