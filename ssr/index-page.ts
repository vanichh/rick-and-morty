import { GET_INIT_CHARACTERS } from "query/characters";
import { checkResponse, request } from "utils/api";
import { URL_API_GRAPHQL } from "utils/constants/api";

export const getServerSideProps = async () => {
  const response = await request({
    url: URL_API_GRAPHQL,
    body: GET_INIT_CHARACTERS(1),
    method: 'POST',
  });
  const { data } = await checkResponse(response);
  return {
    props: {
      results: data.characters.results,
    },
  };
};