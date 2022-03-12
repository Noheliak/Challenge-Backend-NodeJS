const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


router.get('', moviesController.add);
router.get('', moviesController.create);
router.get('', moviesController.edit);
router.get('', moviesController.update);
router.get('', moviesController.delete);
router.get('', moviesController.destroy);

module.exports = router;