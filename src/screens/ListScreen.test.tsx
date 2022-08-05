import React from 'react';
import {mockData} from 'src/data';
import ListScreen from './ListScreen';
import AppContextProvider from 'src/store/Context';
import {render} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {NavigationContainer} from '@react-navigation/native';

describe('ListScreen', () => {
  it('renders ListScreen correctly', async () => {
    const {toJSON, getByTestId} = render(
      <MockedProvider mocks={mockData}>
        <AppContextProvider>
          <NavigationContainer>
            <ListScreen />
          </NavigationContainer>
        </AppContextProvider>
      </MockedProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
    expect(getByTestId('loader')).toBeTruthy();
  });
});
