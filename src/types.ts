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

export const API = 'https://rickandmortyapi.com/graphql';

export enum FLEX_TYPE {
  columnReverse = 'column-reverse',
  row = 'row',
}

export enum WRAP {
  wrap = 'wrap',
  nowrap = 'nowrap',
  wrapReverse = 'wrap-reverse',
}

export enum ALIGN_TYPE {
  center = 'center',
  flexStart = 'flex-start',
}

export enum VIEW_TYPE {
  list = 'list',
  grid = 'grid',
}

export enum FAV_ICON {
  heart = 'heart',
  heartOutline = 'heart-outline',
}

export enum POSITION_TYPE {
  absolute = 'absolute',
  relative = 'relative',
}

export enum SIZE {
  small = 'small',
  large = 'large',
}

export type ListItemProps = {
  viewType?: string;
  onPress?: () => void;
  addToFavorite?: () => void;
} & Character;

export enum STORAGE_VALUES {
  FAVORITE_LIST = 'FAVORITE_LIST',
  VIEW_TYPE = 'VIEW_TYPE',
}

export const INPUT_TEST_ID = 'inputText';

export const CHARACTERS_LIST_TEST_ID = 'characterList';

export const FAVORITE_LIST_BUTTON = 'goTofavScreen';

export const FAV_ICON_TEST_ID = 'fav';
