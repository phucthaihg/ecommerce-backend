require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    dialect: process.env.PG_DIALECT,
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: `${process.env.PG_DATABASE}_test`,
    host: process.env.PG_HOST,
    dialect: process.env.PG_DIALECT,
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: `${process.env.PG_DATABASE}_prod`,
    host: process.env.PG_HOST,
    dialect: process.env.PG_DIALECT,
  },
};
