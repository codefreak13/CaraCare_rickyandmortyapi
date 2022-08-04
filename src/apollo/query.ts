import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        status
        species
        origin {
          id
          name
          type
          dimension
        }
        episode {
          id
          name
        }
        created
      }
    }
  }
`;

interface Episode {
  name: string;
}

export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  episode: Episode[];
  created: string;
  image: string;
}

interface FilterCharacter {
  status?: string;
}

interface Info {
  count: number;
  pages: number;
  next: number;
  prev: number;
}

export interface CharacterVars {
  filter?: FilterCharacter;
  page?: number;
}

export interface CharacterData {
  characters: {
    info: Info;
    results: Character[];
  };
}
