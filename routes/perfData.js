var express = require('express');
var router = express.Router();

var perfData = require('../Api/perfData/index');
router.post('/',perfData.loadPerfData);

module.exports = router;