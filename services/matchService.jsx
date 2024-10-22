const Match = require('../models/Match.jsx');

const createMatch = async (matchData) => {
  return await Match.create(matchData);
};

const getAllMatches = async () => {
  return await Match.find().populate('team1 team2');
};

const getMatchById = async (id) => {
  return await Match.findById(id).populate('team1 team2');
};

const updateMatch = async (id, matchData) => {
  return await Match.findByIdAndUpdate(id, matchData, { new: true });
};

const deleteMatch = async (id) => {
  return await Match.findByIdAndDelete(id);
};

module.exports = {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
};
