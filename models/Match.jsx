const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  team1: { type: String, required: true }, 
  team2: { type: String, required: true }, 
  venue: { type: String, required: true },
  time: { type: Date, required: true },
  status: { type: String, required: true, enum: ['active', 'completed'] } 
});

const Match = mongoose.model('Match', matchSchema);
module.exports = Match;