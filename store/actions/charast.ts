import { TThunks } from './../types/thunks';
import { useQuery } from '@apollo/client';
import { IQueryChaster } from 'interfaces/query-chaster';
import { GET_CHARACTERS } from 'query/characters';

export const getCharast: TThunks = () => async (dispatch, getState) => {
  
  const { counterPage } = getState().character;
  // const { loading, data } = useQuery<IQueryChaster>(GET_CHARACTERS, {
  //   variables: { id: counterPage },
  // });
  // console.log(loading)
};
