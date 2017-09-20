import {
    GraphQLSchema,
    GraphQLObjectType
} from "graphql";
import { countrySchema } from "./country";

export const graphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            country: countrySchema
        }
    })
});
