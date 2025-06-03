const express = require('express');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos');

const app = express();
app.use(express.json());
app.use('/todos', todosRoutes);

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todos');

module.exports = app;

