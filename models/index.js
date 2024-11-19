'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize instance from db.js
const basename = path.basename(__filename);

const db = {};

// Read all model files in the directory, excluding index.js
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)); // Import the model
    if (typeof model.init === 'function') {
      const initializedModel = model.init(sequelize, Sequelize.DataTypes); // Initialize the model
      db[initializedModel.name] = initializedModel;
    }
  });

// Set up associations for all models
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add Sequelize instance and Sequelize library to the exported db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
