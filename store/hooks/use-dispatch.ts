import { useDispatch as dispatchHook } from 'react-redux';
import { Dispatch } from 'redux';
import { TTypeActions } from 'store/types/actions';

export type AppDispatch = Dispatch<TTypeActions>;

export const useDispatch = () => dispatchHook<AppDispatch>();