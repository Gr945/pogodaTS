const mongoose = require('mongoose')


const Sity = mongoose.model('Sity', {
  name: { type: String},
  country: { type: String},
  temp: { type: Number},
  temp_max: {type: Number},
  temp_min: {type: Number},
  speed:{type: Number},
  visibility: {type: Number},
  icon:{ type: String},
  order:{type: Number}
});

module.exports = Sity;
