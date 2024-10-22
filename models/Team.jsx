const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  team_name: { type: String, required: true },
  captain: { type: String, required: true }, 
  players: { type: [String], required: true } 
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
