import type { TCharastActions } from 'store/types/actions/charast';
import { Reducer } from 'redux';
import {
  SET_CHARASTERS,
  START_LODING_CHARASTERS,
  END_LODING_CHARASTERS,
} from 'store/constants/charast';
import { ICharacter } from 'interfaces';

interface IInitState {
  counterPage: number;
  characters: ICharacter[];
  isLoding: boolean;
}

const InitState = {
  counterPage: 2,
  characters: [] as ICharacter[],
  isLoding: false,
};

export const charactReducer: Reducer<IInitState, TCharastActions> = (
  state = InitState,
  action
) => {
  switch (action.type) {
    case START_LODING_CHARASTERS: {
      return {
        ...state,
        isLoding: true,
        counterPage: ++state.counterPage,
      };
    }
    case SET_CHARASTERS: {
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        counter: ++state.counterPage,
        isLoding: false,
      };
    }
    case END_LODING_CHARASTERS: {
      return {
        ...state,
        isLoding: false,
      };
    }

    default: {
      return { ...state };
    }
  }
};
