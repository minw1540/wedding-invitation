var express = require('express');
var wedding   = require('../lib/wedding');
var router = express.Router();

router.post('/sendComment', function(req, res, next) {

	var param = req.body;

	wedding.addNewComment(param, function (err, result) {
		if(err) {
			console.log(err);
			res.json({
				result: -1,
				msg: err.msg
			});

			return;
		}

		res.json({
			result: 1,
			data: result
		});
		return;
	});
});

module.exports = router;
