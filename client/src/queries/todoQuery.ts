import {gql} from "@apollo/client";

const GET_TODOS = gql`
    query getTodos {
        todos {
            id
            title
            completed
        }
    }
`

export {GET_TODOS}