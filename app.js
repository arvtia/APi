const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productsRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productRoutes);
mongoose.connect("mongodb+srv://arvazanakuzhy:salena74@cluster0.gvrencu.mongodb.net/productsDB?retryWrites=true&w=majority")
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT ||  3002;
app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));