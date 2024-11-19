const { Category, SubCategory, Product, User } = require('../models');

async function seedData() {
  await Category.bulkCreate([
    {
      id: 1,
      name: 'Electronics',
      description: 'Devices and gadgets for modern living.',
      image: 'https://example.com/images/electronics.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:2,
      name: 'Clothing',
      description: 'Fashionable attire for all seasons.',
      image: 'https://example.com/images/clothing.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:3,
      name: 'Home & Kitchen',
      description: 'Essentials for a modern home and kitchen.',
      image: 'https://example.com/images/home-kitchen.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:4,
      name: 'Sports & Outdoors',
      description: 'Gear and equipment for outdoor activities.',
      image: 'https://example.com/images/sports-outdoors.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:5,
      name: 'Books',
      description: 'A variety of books for every reader.',
      image: 'https://example.com/images/books.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await SubCategory.bulkCreate([
    {
      id:1,
      name: 'Smartphones',
      description: 'Mobile devices for communication, entertainment, and work.',
      categoryId: 1, // Assume categoryId 1 corresponds to "Electronics"
      image: 'https://example.com/images/smartphones.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:2,
      name: 'Laptops',
      description: 'Portable computers for work and gaming.',
      categoryId: 1, // Assume categoryId 1 corresponds to "Electronics"
      image: 'https://example.com/images/laptops.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:3,
      name: 'Headphones',
      description: 'High-quality audio devices for personal use.',
      categoryId: 1, // Assume categoryId 1 corresponds to "Electronics"
      image: 'https://example.com/images/headphones.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:4,
      name: 'Men\'s Clothing',
      description: 'Apparel for men, including shirts, pants, and suits.',
      categoryId: 2, // Assume categoryId 2 corresponds to "Clothing"
      image: 'https://example.com/images/mens-clothing.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id:5,
      name: 'Kitchen Appliances',
      description: 'Tools and devices for modern kitchens.',
      categoryId: 3, // Assume categoryId 3 corresponds to "Home & Kitchen"
      image: 'https://example.com/images/kitchen-appliances.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await Product.bulkCreate([
    {
      name: 'iPhone 14',
      description: 'The latest Apple smartphone with advanced features.',
      price: 999.99,
      stock: 50,
      subCategoryId: 1,
      images: 'https://example.com/images/iphone14.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Samsung Galaxy S23',
      description: 'High-performance smartphone from Samsung.',
      price: 899.99,
      stock: 30,
      subCategoryId: 1,
      images: 'https://example.com/images/galaxys23.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'MacBook Pro 16"',
      description: 'Powerful laptop for professionals.',
      price: 2499.99,
      stock: 20,
      subCategoryId: 2,
      images: 'https://example.com/images/macbookpro.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Dell XPS 13',
      description: 'Sleek and powerful ultrabook.',
      price: 1499.99,
      stock: 15,
      subCategoryId: 2,
      images: 'https://example.com/images/dellxps13.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise-canceling headphones.',
      price: 399.99,
      stock: 100,
      subCategoryId: 3,
      images: 'https://example.com/images/sonyheadphones.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  await User.bulkCreate([
    {
      username: 'johndoe',
      email: 'johndoe@example.com',
      password: 'hashedPassword',
      firstname: 'John',
      lastname: 'Doe',
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'janedoe',
      email: 'janedoe@example.com',
      password: 'hashedPassword',
      firstname: 'Jane',
      lastname: 'Doe',
      role: 'customer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'adminuser',
      email: 'admin@example.com',
      password: 'hashedPassword',
      firstname: 'Admin',
      lastname: 'User',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  console.log('Test data loaded successfully!');
  process.exit();
}

seedData().catch((error) => {
  console.error('Error loading test data:', error);
  process.exit(1);
});
