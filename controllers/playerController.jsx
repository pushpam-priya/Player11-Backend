const playerService = require('../services/playerService.jsx');

const createPlayer = async (req, res) => {
  try {
    const player = await playerService.createPlayer(req.body);
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlayers = async (req, res) => {
  try {
    const players = await playerService.getAllPlayers();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlayerById = async (req, res) => {
  try {
    const player = await playerService.getPlayerById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const updatedPlayer = await playerService.updatePlayer(req.params.id, req.body);
    if (!updatedPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.status(200).json(updatedPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const deletedPlayer = await playerService.deletePlayer(req.params.id);
    if (!deletedPlayer) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPlayer,
  getPlayers,
  getPlayerById,
  updatePlayer,
  deletePlayer,
};
