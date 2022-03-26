const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');


//create//
router.get('/add', moviesController.add);
router.post('/create', moviesController.create)

//read//

router.get('/movies', moviesController.list);
router.get('/movies/detail/:id', moviesController.detail);

//update//
router.get('/edit/id', moviesController.edit);
router.post('/update/id', moviesController.update);

//delete//
router.post('/destroy/id', moviesController.destroy);

module.exports = router;