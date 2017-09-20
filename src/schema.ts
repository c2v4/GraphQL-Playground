import {
    GraphQLSchema,
    GraphQLObjectType, GraphQLString, GraphQLFieldConfig
} from "graphql";

const countrySchema: GraphQLFieldConfig<any, any> = {
    type: new GraphQLObjectType({
        name: "subtype",
        fields: () => ({
            name: {
                type: GraphQLString
            }
        })
    })
};

export const graphqlSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            country: countrySchema
        }
    })
});
