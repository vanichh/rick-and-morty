import { gql } from '@apollo/client';

export const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        name
        image
        gender
        status
        id
        species
        episode {
          name
        }
        location {
          name
        }
      }
    }
  }
`;
