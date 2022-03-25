import { INCREMENT_COUNTER } from 'store/constants';

interface IIcrementCounter {
  readonly type: typeof INCREMENT_COUNTER;
}

export type TCharastActions = IIcrementCounter;
