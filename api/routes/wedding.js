var express = require('express');
var wedding   = require('../lib/wedding');
var router = express.Router();

router.get('/sendComment', function(req, res, next) {
	var param = {
		'test' : 1
	};

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
