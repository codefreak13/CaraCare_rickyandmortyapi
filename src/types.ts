import {Character} from './apollo/query';

export enum FLEX_TYPE {
  columnReverse = 'column-reverse',
  row = 'row',
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

export const enum STORAGE_VALUES {
  FAVORITE_LIST = 'FAVORITE_LIST',
  VIEW_TYPE = 'VIEW_TYPE',
}
