import type { TCharastActions } from 'store/types/actions/charast';
import {
  GET_CHARASTERS,
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
  characters: [],
  isLoding: false,
};

export const charactReducer = (
  state: IInitState = InitState,
  action: TCharastActions
) => {
  switch (action.type) {
    case START_LODING_CHARASTERS: {
      return {
        ...state,
        isLoding: true,
      };
    }

    case GET_CHARASTERS: {
      return {
        ...state,
        characters: action.payload,
        counter: ++state.counterPage,
      };
    }
    case END_LODING_CHARASTERS: {
      return {
        ...state,
        isLoding: false,
      };
    }

    default: {
      return state;
    }
  }
};
