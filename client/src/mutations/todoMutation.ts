import {gql} from '@apollo/client';

const ADD_TODO = gql`
    mutation addTodo($title: String!) {
        addTodo(title: $title) {
            title
        }
    }
`;

const DELETE_TODO = gql`
    mutation deleteTodos($id: ID!) {
        deleteTodos(id: $id) {
            id
            title
            completed
        }
    }
`;

const UPDATE_TODO = gql`
    mutation updateTodo(
        $id: ID
        $title: String
        $completed: Boolean
    ) {
        updateTodo(
            id: $id
            title: $title
            completed: $completed
        ) {
            id
            title
            completed
        }
    }
`

export {ADD_TODO, DELETE_TODO, UPDATE_TODO};