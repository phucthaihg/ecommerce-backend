const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const SubCategory = require('./SubCategory');

const Product = sequelize.define('Product', {
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
}, {
  timestamps: true,
});

Product.belongsTo(SubCategory, { foreignKey: 'subCategoryId', as: 'subCategory' });
Product.hasMany(CartItem, { foreignKey: 'productId', as: 'cartItems' });
Product.hasMany(OrderDetails, { foreignKey: 'productId', as: 'orderDetails' });
      
module.exports = Product;



'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.CartItem, { foreignKey: 'productId', as: 'cartItems' });
      Product.hasMany(models.OrderDetails, { foreignKey: 'productId', as: 'orderDetails' });
      Product.belongsTo(models.SubCategory, { foreignKey: 'subCategoryId', as: 'subCategory' });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    stock: DataTypes.INTEGER,
    subCategoryId: DataTypes.INTEGER,
    images: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};