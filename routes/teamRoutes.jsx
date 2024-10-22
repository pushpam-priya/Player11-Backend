const express = require('express');
const teamController = require('../controllers/teamController.jsx');
const router = express.Router();

router.post('/teams', teamController.createTeam);
router.get('/teams', teamController.getTeams);
router.get('/teams/:id', teamController.getTeamById);
router.put('/teams/:id', teamController.updateTeam);
router.delete('/teams/:id', teamController.deleteTeam);

module.exports = router;
