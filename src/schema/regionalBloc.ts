import {
    GraphQLFieldConfig,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const regionalBlocSchema = new GraphQLObjectType({
    name: "regionalBloc",
    fields: {
        name: <GraphQLFieldConfig<any, any>> {
            type: GraphQLString,
            resolve: data => data.name
        },
        acronym: {
            type: GraphQLString,
            resolve: data => data.acronym
        }
    }
});