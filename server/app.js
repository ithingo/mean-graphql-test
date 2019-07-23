const express = require('express');

const app = express();
const cors = require('cors');
app.use('*', cors());

const graphqlHttp = require('express-graphql');
const countrySchema = require('./graphql/index');
app.use('/graphql', cors(), graphqlHttp({
  schema: countrySchema,
  rootValue: global,
  graphiql: true,
}));

module.exports = app;
