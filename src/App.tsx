import React from 'react';
import {client} from 'src/apollo';
import {ApolloProvider} from '@apollo/client';
import AppContextProvider from 'src/store/Context';
import Screens from 'src/navigation/RootNavigator';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <ApolloProvider client={client}>
        <AppContextProvider>
          <Screens />
        </AppContextProvider>
      </ApolloProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});
