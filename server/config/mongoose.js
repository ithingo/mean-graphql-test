const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

const mongoose = require('mongoose');
const db = mongoose.connect(config.db, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection
  .on('open', () => console.warn('connection established'))
  .on('connected', () => console.warn('connected'))
  .on('error', err => console.warn(`connection error: ${err}`));

module.exports = db;