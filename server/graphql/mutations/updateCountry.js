const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const CountryType = require('../types/country');
const CountryModel = require('../../models/country');

const updateAction = {
  type: CountryType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
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
    const action = {
      $set: {
        name: params.name,
        continent: params.continent,
        phoneCode: params.phoneCode,
      }
    };
    return CountryModel
      .findByIdAndUpdate(params.id, action, { new: true })
      .catch(err => new Error(err));
  }
};

module.exports = updateAction;
