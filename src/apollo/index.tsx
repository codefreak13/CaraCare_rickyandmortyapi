import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing, incoming) {
              if (!existing) return incoming;
              const newValue = {...existing};
              newValue.info = incoming.info;
              newValue.results = [...existing.results, ...incoming.results];
              return newValue;
            },
          },
        },
      },
    },
  }),
});
