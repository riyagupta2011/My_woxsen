const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  variety: {
    type: String,
    required: true,
  },
  selectedBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  description: {
    type: String,
    required: true,
  },
  day:{
    type: String,
    required: true,
  },
});


const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
