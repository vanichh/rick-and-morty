import { TThunks } from './../types/thunks';
import { request, checkResponse } from 'utils/api';
import { URL_API_GRAPHQL } from 'utils/constants/api';
import { GET_INIT_CHARACTERS } from 'utils/query/characters';
import { startLoding } from 'store/actions-type/charast';
import { setCharast } from 'store/actions-type/charast';

export const getCharast: TThunks = () => async (dispatch, getState) => {
  const state = getState();
  const { counterPage } = state.character;

  dispatch(startLoding);
  const response = await request({
    method: 'POST',
    url: URL_API_GRAPHQL,
    body: GET_INIT_CHARACTERS(counterPage),
  });
  const { data } = await checkResponse(response);
  dispatch(setCharast(data.characters.results));
};
