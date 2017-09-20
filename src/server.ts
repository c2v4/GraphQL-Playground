import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { graphqlSchema } from './schema'
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true
}));
app.listen(8080);
