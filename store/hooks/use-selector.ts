import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux';
import { rootReducer } from 'store/reducers/root-reducer';

type RootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
