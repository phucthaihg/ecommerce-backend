'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Category extends Model {
  static associate(models) {
    Category.hasMany(models.SubCategory, { foreignKey: 'categoryId', as: 'subCategories', onDelete: 'CASCADE' });
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
        image: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Category',
        timestamps: true,
      }
    );
  }
}

module.exports = Category;
