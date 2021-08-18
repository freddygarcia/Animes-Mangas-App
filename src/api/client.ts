import { ApolloClient, InMemoryCache } from '@apollo/client'

const URI = 'https://kitsu.io/api/graphql';

export const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
})
