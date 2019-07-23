const mongoDbConfig = {
  development: {
    db: 'mongodb://127.0.0.1/graphql',
    app: { name: 'graphql' },
  },
}

module.exports = mongoDbConfig;