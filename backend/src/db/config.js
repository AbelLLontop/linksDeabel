const mongoose = require('mongoose');
 const URI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/linksAbel';
//const URI = process.env.MONGODB_URI ?? 'mongodb://u8x3b9s2jfzbvwhb3i5l:wUJnsVcjASA6QCaIqJih@b9r6yafod1zkcge-mongodb.services.clever-cloud.com:27017/b9r6yafod1zkcge';

module.exports = mongoose.connect(URI);