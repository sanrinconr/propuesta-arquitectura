const express = require('express');
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors');
const schema = require('./graphql/schema')


const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))


module.exports = app;
