import {ApolloClient, HttpLink, InMemoryCache} from '@apollo/client';
import {API} from 'src/types';

export const client = new ApolloClient({
  link: new HttpLink({uri: API}),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            // Don't cache separate results based on
            // any of this field's arguments.
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
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
