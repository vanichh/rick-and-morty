import type { TCharastActions } from 'store/types/actions/charast';
import { INCREMENT_COUNTER } from 'store/constants/charast';
import { ICharacter } from 'interfaces';

interface IInitState {
  counterPage: number;
  characters: ICharacter[];
}

const InitState: IInitState = {
  counterPage: 2,
  characters: [],
};

export const charactReducer = (state = InitState, action: TCharastActions) => {
  switch (action.type) {
    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: ++state.counterPage,
      };
    }
    default: {
      return state;
    }
  }
};
