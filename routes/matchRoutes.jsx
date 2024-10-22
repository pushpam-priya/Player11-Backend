const express = require('express');
const matchController = require('../controllers/matchController.jsx');
const router = express.Router();

router.post('/matches', matchController.createMatch);
router.get('/matches', matchController.getMatches);
router.get('/matches/:id', matchController.getMatchById);
router.put('/matches/:id', matchController.updateMatch);
router.delete('/matches/:id', matchController.deleteMatch);

module.exports = router;
