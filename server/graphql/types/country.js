const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const countryType = new GraphQLObjectType({
  name: 'country',
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      name: { type: GraphQLString },
      continent: { type: GraphQLString },
      phoneCode: { type: GraphQLInt },
    }
  }
});

module.exports = countryType;