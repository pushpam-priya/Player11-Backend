const Player = require('../models/Player.jsx');

const createPlayer = async (playerData) => {
  return await Player.create(playerData);
};

const getAllPlayers = async () => {
  return await Player.find();
};

const getPlayerById = async (id) => {
  return await Player.findById(id);
};

const updatePlayer = async (id, playerData) => {
  return await Player.findByIdAndUpdate(id, playerData, { new: true });
};

const deletePlayer = async (id) => {
  return await Player.findByIdAndDelete(id);
};

module.exports = {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
};
