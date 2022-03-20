const express = require('express');
const router = express.Router();

const AllController = require('../controllers/AllController');

router.post('/contactsubmit',AllController.contactsubmit);
router.post('/requestaquotesubmit',AllController.requestaquotesubmit);



module.exports=router;
