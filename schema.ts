import { GraphQLSchema,GraphQLFieldConfigMap,Thunk, GraphQLFieldConfig,GraphQLScalarTypeConfig, GraphQLObjectType, GraphQLScalarType, GraphQLObjectTypeConfig } from 'graphql'

export const graphqlSchema = new GraphQLSchema({
  query: new GraphQLObjectType(<GraphQLObjectTypeConfig<any, any>>{
    name: 'Asd',
    fields: <Thunk<GraphQLFieldConfigMap<any, any>>> {
      asd: <GraphQLFieldConfig<any,any>>{
        type: new GraphQLScalarType(<GraphQLScalarTypeConfig<any,any>>{
          name: 'minorAsd',
          serialize: ()=>null
        })
      }
    }
  })
})
