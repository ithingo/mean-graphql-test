const { GraphQLObjectType, GraphQLList } = require('graphql');

const CountryModel = require('../../models/country');
const countryType = require('../types/country');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => {
    return {
      countries: {
        type: new GraphQLList(countryType),
        resolve: () => {
          const countries = CountryModel.find().exec();
          if (countries == null) { throw new Error('something went wrong'); }
          return countries;
        }
      }
    }
  }
});

module.exports = queryType;
