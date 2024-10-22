const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  team_name: { type: String, required: true },
  captain: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true },
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
});

module.exports = mongoose.model('Team', TeamSchema);
