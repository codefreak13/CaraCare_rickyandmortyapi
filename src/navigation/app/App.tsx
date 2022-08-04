import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ListScreen, FavoriteScreen, DetailScreen} from '../../screens/';

import {AppStackParamList, APP_ROUTE} from '../types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={APP_ROUTE.LIST} component={ListScreen} />
      <Stack.Screen name={APP_ROUTE.FAVORITE} component={FavoriteScreen} />
      <Stack.Screen name={APP_ROUTE.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
