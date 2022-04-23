const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/linksAbel';
module.exports = mongoose.connect(URI);