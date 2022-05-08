const { mongoose } = require('mongoose');
const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.models.Category || model('Category', categorySchema);
