import {ApolloClient, gql, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
});

export const GET_TODOS = gql`
    query {
        getTodos {
            id
            title
            completed
        }
    }
`;
