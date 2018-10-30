var express = require('express');
var wedding   = require('../lib/wedding');
var router = express.Router();

router.get('/connect', function(req, res, next) {
    res.json({
        result: 1,
        data: 'connect',
    });
    return;
});

module.exports = router;