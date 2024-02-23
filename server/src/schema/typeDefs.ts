import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql/type";
import Todo from "./todoModel";

const todoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        completed: {type: GraphQLBoolean},
    }),
})

const query = new GraphQLObjectType({
    name: 'queryType',
    fields: {
        getTodos: {
            type: new GraphQLList(todoType),
            resolve(parent, args) {
                return Todo.find()
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // Get todos from database
        addTodo: {
            type: todoType,
            args: {
                title: {type: GraphQLString},
                completed: {type: GraphQLBoolean}
            },
            resolve(parent, args) {
                const todo = new Todo({
                    title: args.title,
                    completed: args.completed
                })

                return todo.save()
            }
        },
        // update todos
        updateTodo: {
            type: todoType,
            args: {
                id: {type: GraphQLID},
                title: {type: GraphQLString},
                completed: {type: GraphQLBoolean}
            },
            resolve(parent, args) {
                return Todo.findByIdAndUpdate(args.id, {
                    $set: {
                        title: args.title,
                        completed: args.completed
                    }
                }, {new: true})
            }
        },
        //     delete todos
        deleteTodos: {
            type: todoType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                Todo.findByIdAndDelete(args.id)
            }
        }
    }
})

export const schema = new GraphQLSchema({query, mutation})
