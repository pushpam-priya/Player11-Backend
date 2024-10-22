const Team = require('../models/Team.jsx');

const createTeam = async (teamData) => {
  return await Team.create(teamData);
};

const getAllTeams = async () => {
  return await Team.find().populate('captain players');
};

const getTeamById = async (id) => {
  return await Team.findById(id).populate('captain players');
};

const updateTeam = async (id, teamData) => {
  return await Team.findByIdAndUpdate(id, teamData, { new: true });
};

const deleteTeam = async (id) => {
  return await Team.findByIdAndDelete(id);
};

module.exports = {
  createTeam,
  getAllTeams,
  getTeamById,
  updateTeam,
  deleteTeam,
};
