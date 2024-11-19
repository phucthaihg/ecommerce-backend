'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Category = require('./category');

class SubCategory extends Model {
  static associate(models) {
    SubCategory.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category', onDelete: 'CASCADE' });
    SubCategory.hasMany(models.Product, { foreignKey: 'subCategoryId', as: 'products', onDelete: 'CASCADE' });
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
        categoryId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Category',
            key: 'id',
          },
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'SubCategory',
        timestamps: true,
      }
    );
  }
}
module.exports = SubCategory;
