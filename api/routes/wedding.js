var express = require('express');
var wedding   = require('../lib/wedding');
var router = express.Router();

//댓글 작성
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

//댓글 리스트
router.get('/getCommentList', function(req, res, next) {

	wedding.getCommentList(function (err, result) {
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

//댓글 삭제
router.put('/deleteComment', function(req, res, next) {

	var param = req.body;

	wedding.deleteComment(param, function (err, result) {
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
