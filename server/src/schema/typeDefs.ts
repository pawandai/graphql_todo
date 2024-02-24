import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';
import Todo from './todoModel';

const todoType = new GraphQLObjectType({
    name: 'Todo',
    fields: () => ({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        completed: {type: GraphQLBoolean},
    }),
});

const query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        getTodos: {
            type: new GraphQLList(todoType),
            resolve(parent, args) {
                return Todo.find();
            },
        },
    },
});

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addTodo: {
            type: todoType,
            args: {
                title: {type: GraphQLString},
                completed: {type: GraphQLBoolean},
            },
            resolve(parent, args) {
                const todo = new Todo({
                    title: args.title,
                    completed: args.completed,
                });

                return todo.save();
            },
        },
        updateTodo: {
            type: todoType,
            args: {
                id: {type: GraphQLID},
                title: {type: GraphQLString},
                completed: {type: GraphQLBoolean},
            },
            resolve(parent, args) {
                return Todo.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            title: args.title,
                            completed: args.completed,
                        },
                    },
                    {new: true}
                );
            },
        },
        deleteTodo: {
            type: GraphQLString, // Return a message indicating success/failure
            args: {id: {type: GraphQLID}},
            async resolve(parent, args) {
                try {
                    await Todo.findByIdAndDelete(args.id);
                    return 'Todo deleted successfully';
                } catch (error) {
                    throw new Error('Failed to delete todo');
                }
            },
        },
    },
});

export const schema = new GraphQLSchema({query, mutation});
