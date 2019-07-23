const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const CountryType = require('../types/country');
const CountryModel = require('../../models/country');

const addAction = {
  type: CountryType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    continent: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phoneCode: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: (root, params) => {
    const newCountry = new CountryModel(params).save();
    if (newCountry == null) { throw new Error('something went wrong'); }
    return newCountry;
  }
};

module.exports = addAction;