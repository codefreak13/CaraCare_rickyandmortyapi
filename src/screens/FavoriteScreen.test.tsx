import React from 'react';
import {mockData} from 'src/data';
import FavoriteScreen from './FavoriteScreen';
import AppContextProvider from 'src/store/Context';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';

describe('FavoriteScreen', () => {
  it('renders FavoriteScreen correctly', () => {
    const {toJSON, getByText} = render(
      <MockedProvider mocks={mockData}>
        <AppContextProvider>
          <NavigationContainer>
            <FavoriteScreen />
          </NavigationContainer>
        </AppContextProvider>
      </MockedProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByText('FAVORITE CHARACTERS')).toBeTruthy();
  });
});
