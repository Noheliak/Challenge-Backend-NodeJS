const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/character', characterController.list);
router.get('/character/detail/:id', characterController.detail);


//create//
router.get('/add', characterController.add);
router.post('/create', characterController.create)

//read//
router.get('/character', characterController.list);
router.get('/character/detail/:id', characterController.detail);


//update//
router.get('/edit/id', characterController.edit);
router.post('/update/id', characterController.update);

//delete//
router.post('/destroy/id', characterController.destroy);



module.exports = router;