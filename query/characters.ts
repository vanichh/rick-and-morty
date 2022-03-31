import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharact($page: Int) {
    characters(page: $page) {
      results {
        name
        image
        gender
        status
        id
        species
        location {
          name
        }
      }
    }
  }
`;

export const GET_INIT_CHARACTERS = (id: number) => ({
  query: `{
  characters(page: ${id}) {
    results {
      name
      image
      gender
      status
      id
      species
      location {
        name
      }
    }
  }
}`,
});
