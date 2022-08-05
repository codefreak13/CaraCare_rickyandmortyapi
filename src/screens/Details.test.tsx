import React from 'react';
import {mockData} from 'src/data';
import DetailScreen from './DetailScreen';
import AppContextProvider from 'src/store/Context';
import {MockedProvider} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import {AppStackParamList, APP_ROUTE} from 'src/navigation/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<
  AppStackParamList & {MOCK_COMPONENT: undefined}
>();

describe('DetailScreen', () => {
  it('renders DetailScreen correctly', async () => {
    const {toJSON, getByText} = render(
      <MockedProvider mocks={mockData}>
        <AppContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName={APP_ROUTE.DETAIL}>
              <Stack.Screen name={APP_ROUTE.DETAIL} component={DetailScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AppContextProvider>
      </MockedProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
    // expect(getByText('CHARACTER DETAIL')).toBeTruthy();
  });
});
