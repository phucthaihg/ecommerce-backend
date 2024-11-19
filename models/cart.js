'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Cart extends Model {
  static associate(models) {
    Cart.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Cart.hasMany(models.CartItem, { foreignKey: 'cartId', as: 'items', onDelete: 'CASCADE' });
  }

  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        totalAmount: {
          type: DataTypes.FLOAT,
          allowNull: false,
          defaultValue: 0.0,
        },
      },
      {
        sequelize,
        modelName: 'Cart',
        timestamps: true,
      }
    );
  }
}

module.exports = Cart;
