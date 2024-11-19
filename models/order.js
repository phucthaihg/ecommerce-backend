'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Order extends Model {
  static associate(models) {
    Order.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    Order.hasMany(models.OrderDetails, { foreignKey: 'orderId', as: 'items', onDelete: 'CASCADE' });
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
        status: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'pending',
        },
      },
      {
        sequelize,
        modelName: 'Order',
        timestamps: true,
      }
    );
  }
}
module.exports = Order;
