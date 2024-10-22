const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  points: { type: Number, default: 5, min: 0, max: 10 },
});

module.exports = mongoose.model('Player', PlayerSchema);
