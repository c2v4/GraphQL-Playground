import {
    GraphQLFieldConfig,
    GraphQLList,
    GraphQLObjectType,
    GraphQLString
} from "graphql";
import fetch from "node-fetch";
import {
    currencySchema
} from "./currency";
import * as _ from "lodash";
import { regionalBlocSchema } from "./regionalBloc";

const countryType: GraphQLObjectType = new GraphQLObjectType({
    name: "country",
    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: data => data.name
        },
        capital: {
            type: GraphQLString,
            resolve: data => data.capital
        },
        region: {
            type: GraphQLString,
            resolve: data => data.region
        },
        timezones: {
            type: new GraphQLList(GraphQLString),
            resolve: data => data.timezones
        },
        currencies: {
            type: new GraphQLList(currencySchema),
            resolve: data => data.currencies
        },
        languages: {
            type: new GraphQLList(GraphQLString),
            resolve: data => _.map(data.languages, "name")
        },
        regionalBlocs: {
            type: new GraphQLList(regionalBlocSchema),
            resolve: data => data.regionalBlocs
        },
        neighbors: {
            type: new GraphQLList(countryType),
            resolve: data => _.map(<Array<string>> data.borders,
                arg => fetch(`https://restcountries.eu/rest/v2/alpha/${arg}`)
                    .then(response => response.json()))
        }
    })
});

export const countrySchema: GraphQLFieldConfig<any, any> = {
    type: new GraphQLList(countryType),
    args: {
        name: {
            type: GraphQLString
        }
    },
    resolve: (root: any,
              args: any) => fetch(`https://restcountries.eu/rest/v2/name/${args.name}`)
        .then(response => response.json())
};
