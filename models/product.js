'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Product extends Model {
  static associate(models) {
    Product.belongsTo(models.SubCategory, { foreignKey: 'subCategoryId', as: 'subCategory', onDelete: 'CASCADE' });
  }

  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        subCategoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        images: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: 'Product',
        timestamps: true,
      }
    );
  }
}
module.exports = Product;
