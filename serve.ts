import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { graphqlSchema } from './schema'
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}))
app.listen(8080);
