const {
  GraphQLNonNull,
  GraphQLString,
} = require('graphql');

const CountryType = require('../types/country');
const CountryModel = require('../../models/country');

const removeAction = {
  type: CountryType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (root, params) => {
    const removedCountry = CountryModel.findByIdAndRemove(params.id).exec();
    if (removedCountry == null) { throw new Error('something went wrong'); }
    return removedCountry;
  }
};

module.exports = removeAction;