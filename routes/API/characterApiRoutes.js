const express = require('express');
const router = express.Router();
const characterApiController = require('../../controllers/API/characterApiController');

//CREATE//
router.post('/create', characterApiController.create);

//READ//
router.get('/character', characterApiController.list);
router.get('/:id', characterApiController.detail);

//UPDATE//
router.put('/update/:id', characterApiController.update);

//DELETE//
router.delete('/delete/:id', characterApiController.destroy);

module.exports = router;