import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import type { RootState } from 'store/types/root-state';
import { TTypeActions } from 'store/types/actions';

export type TThunks<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, TTypeActions, Action>
>;
