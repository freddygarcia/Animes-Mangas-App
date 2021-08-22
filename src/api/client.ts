import { ApolloClient, InMemoryCache } from '@apollo/client'
import { API_URL } from '../app/contants';

const URI = API_URL;

export const client = new ApolloClient({
    uri: URI,
    cache: new InMemoryCache(),
})
