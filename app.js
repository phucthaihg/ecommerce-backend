require('dotenv').config();

const express = require('express');
const cors = require('cors');

const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cartRoutes = require('./routes/cartRoutes');
const { verifyToken } = require('./middleware/authMiddleware');
const { errorHandler } = require('./middleware/errorMiddleware');
const { requestLogger } = require('./middleware/requestLogger');



const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(requestLogger);

// Routes

// Sample route
/*
app.get('/api/products', async (req, res) => {
  try {
    const products = await sequelize.query('SELECT * FROM "Products"', {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(`[API Response]: Returning ${products.length} products`);
    res.status(200).json(products);
  } catch (error) {
    console.error('[API Error]:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
*/

app.use('/api/auth', authRoutes);
app.use('/api/users', verifyToken, userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subCategoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', verifyToken, orderRoutes);
app.use('/api/carts', verifyToken, cartRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
/*
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/
const PORT = process.env.PORT || 3001;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => console.log(err));
