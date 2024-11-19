'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {
  static associate(models) {
    User.hasMany(models.Order, { foreignKey: 'userId', as: 'orders' });
    User.hasOne(models.Cart, { foreignKey: 'userId', as: 'cart' });
  }

  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'customer',
        },
      },
      {
        sequelize,
        modelName: 'User',
        timestamps: true,
      }
    );
  }
}
module.exports = User;
