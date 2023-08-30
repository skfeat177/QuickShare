// fileSchema.js
const mongoose = require('./db'); // Import the MongoDB connection
const Schema = mongoose.Schema;

// Define the schema
const textSchema = new Schema({
 dataType:String,
 dataName:String,
 dataContent:String,
 postedAt:Date,
 link:String
});

// Create a model based on the schema
const Data = mongoose.model('Text-Data', textSchema);

module.exports = Data;
