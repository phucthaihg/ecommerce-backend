const { Category, SubCategory, Product, User } = require('../models');

async function seedData() {
  await Category.bulkCreate([
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
    { id: 3, name: 'Home & Kitchen' },
  ]);

  await SubCategory.bulkCreate([
    { id: 1, name: 'Mobile Phones', categoryId: 1 },
    { id: 2, name: 'Laptops', categoryId: 1 },
    { id: 3, name: 'Men\'s Wear', categoryId: 2 },
  ]);

  await Product.bulkCreate([
    { id: 1, name: 'iPhone 14', price: 999.99, categoryId: 1, subCategoryId: 1 },
    { id: 2, name: 'MacBook Pro', price: 1299.99, categoryId: 1, subCategoryId: 2 },
    { id: 3, name: 'Men\'s T-Shirt', price: 19.99, categoryId: 2, subCategoryId: 3 },
  ]);

  await User.bulkCreate([
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'hashed_password', role: 'customer' },
    { id: 2, name: 'Admin User', email: 'admin@example.com', password: 'hashed_password', role: 'admin' },
  ]);

  console.log('Test data loaded successfully!');
  process.exit();
}

seedData().catch((error) => {
  console.error('Error loading test data:', error);
  process.exit(1);
});
