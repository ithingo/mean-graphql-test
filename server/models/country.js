const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  continent: {
    type: String,
    required: true,
  },
  phoneCode: {
    type: Number,
    required: false,
  }
});
const Model = mongoose.model('Country', countrySchema);
module.exports = Model;