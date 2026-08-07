const express = require('express');
const cors = require('cors');

// Environment variables
const dotenv = require('dotenv');
dotenv.config();

// DB Connection
const connectToDB = require('./db/connection');

// Routes
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// DB Connection
connectToDB();

// Routes
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 3000, () => console.log('Server started on port', process.env.PORT || 3000));