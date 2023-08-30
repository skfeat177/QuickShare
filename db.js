require('dotenv').config();
const mongoose = require('mongoose');

// Replace 'your_password' with your actual MongoDB Atlas password
const mongoUri = process.env.MONGO_DB_URI;

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

module.exports = mongoose;
