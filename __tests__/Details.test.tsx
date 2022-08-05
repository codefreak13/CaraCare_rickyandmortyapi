import React from 'react';
import {mockData} from 'src/data';
import DetailScreen from 'src/screens/DetailScreen';
import AppContextProvider from 'src/store/Context';
import {MockedProvider} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import {AppStackParamList, APP_ROUTE} from 'src/navigation/types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Character} from 'src/types';

const Stack = createNativeStackNavigator<
  AppStackParamList & {MOCK_COMPONENT: undefined}
>();

describe('DetailScreen', () => {
  it('renders DetailScreen correctly', async () => {
    const {toJSON, getByText} = render(
      <MockedProvider mocks={mockData}>
        <AppContextProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name={APP_ROUTE.DETAIL}
                component={DetailScreen}
                initialParams={
                  mockData[0].data.results[0] as Partial<Character>
                }
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AppContextProvider>
      </MockedProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByText('CHARACTER DETAIL')).toBeTruthy();
  });
});
