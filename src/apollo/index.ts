import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {API} from 'src/types';

export const client = new ApolloClient({
  link: new HttpLink({uri: API}),
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
