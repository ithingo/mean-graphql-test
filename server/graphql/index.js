const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const queryType = require('./queries/country');
const mutation = require('./mutations/index');

const countrySchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  }),
});

module.exports = countrySchema;