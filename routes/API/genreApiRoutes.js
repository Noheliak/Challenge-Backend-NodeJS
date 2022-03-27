const express = require('express');
const router = express.Router();
const genreApiController = require('../../controllers/API/genreApiController');


router.get('/', genreApiController.list);

router.get('/:id', genreApiController.detail);

module.exports = router;