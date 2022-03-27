const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/API/moviesApiController');

//CREATE//
router.post('/create', moviesApiController.create);

//READ/
router.get('/', moviesApiController.list);
router.get('/:id', moviesApiController.detail);

//UPDATE//
router.put('/update/:id', moviesApiController.update);

//DELETE//
router.delete('/delete/:id', moviesApiController.destroy);

module.exports = router;