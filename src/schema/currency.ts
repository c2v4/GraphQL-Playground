import {
    GraphQLFieldConfig,
    GraphQLObjectType,
    GraphQLString
} from "graphql";

export const currencySchema = new GraphQLObjectType({
    name: "currency",
    fields: {
        name: <GraphQLFieldConfig<any, any>> {
            type: GraphQLString,
            resolve: data => data.name
        },
        code: {
            type: GraphQLString,
            resolve: data => data.code
        },
        symbol: {
            type: GraphQLString,
            resolve: data => data.symbol
        }
    }
});