import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Character} from '../apollo/query';

/// We use enums to prevent the use of strings across the application - i.e, write once

export const enum APP_ROUTE {
  LIST = 'LIST',
  FAVORITE = 'FAVORITE',
  DETAIL = 'DETAIL',
}

export type AppStackParamList = {
  [APP_ROUTE.LIST]: undefined;
  [APP_ROUTE.FAVORITE]: undefined;
  [APP_ROUTE.DETAIL]: Character;
};

export type ListScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  APP_ROUTE.LIST
>;

export type FavoriteScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  APP_ROUTE.FAVORITE
>;

export type DetailScreenRouteProp = RouteProp<
  AppStackParamList,
  APP_ROUTE.DETAIL
>;

export type DetailScreenNavigationProp = NativeStackNavigationProp<
  AppStackParamList,
  APP_ROUTE.DETAIL
>;
