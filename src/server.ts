import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import { graphQLSchema } from "./schema/schema";
const app = express();
app.use("/graphql", graphqlHTTP({
  schema: graphQLSchema,
  graphiql: true
}));
app.listen(8080);
