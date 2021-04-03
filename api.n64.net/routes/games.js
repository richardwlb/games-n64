const express = require('express');
const router = express.Router();
const GamesController = require('../controllers/gamesController');

router.get('/', GamesController.show);
router.post('/', GamesController.create);
router.put('/:id', GamesController.update);
router.delete('/:id', GamesController.destroy);

module.exports = router;
