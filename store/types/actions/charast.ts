import { GET_CHARASTERS, START_LODING_CHARASTERS, END_LODING_CHARASTERS } from 'store/constants';
import { ICharacter } from 'interfaces/character';
interface IGetCounter {
  readonly type: typeof GET_CHARASTERS;
  readonly payload: ICharacter[];
}
interface IStartLodingCharacter {
  readonly type: typeof START_LODING_CHARASTERS;
}
interface iEndLodingCharacter {
  readonly type: typeof END_LODING_CHARASTERS
}

export type TCharastActions = IGetCounter | IStartLodingCharacter | iEndLodingCharacter;
