require('dotenv').config();

const { Sequelize } = require('sequelize');

// Create a new Sequelize instance with database connection details
const sequelize = new Sequelize(
  process.env.PG_DATABASE,    // Database name
  process.env.PG_USER,        // Username
  process.env.PG_PASSWORD,    // Password
  {
    host: process.env.PG_HOST,
    dialect: process.env.PG_DIALECT || 'postgres', // Specify the dialect explicitly
    logging: (msg) => console.log(`[DB]: ${msg}`), // Log all SQL queries
  }
);

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;

