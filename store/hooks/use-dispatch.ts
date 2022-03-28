import { useDispatch as dispatchHook } from 'react-redux';
import { Dispatch } from 'redux';
import { TTypeActions } from 'store/types/actions';
import { TThunks } from 'store/types/thunks';

type AppDispatch = Dispatch<TTypeActions>;

export const useDispatch = () => dispatchHook<AppDispatch | TThunks>();
