const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  venue: { type: String, required: true },
  time: { type: Date, required: true },
  status: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
});

module.exports = mongoose.model('Match', MatchSchema);
