var request = require('request');
var jsonfy  = require('jsonfy');
var date_format = require('date-format');
var mysql  = require('mysql');
var db      = require('./database');

exports.addNewComment = function (param, callback) {

	var sql = '';
	sql = 'SELECT * FROM comment;';
	console.log(1111);
	console.log(process.env.DB_HOST);
	console.log(1111);
	db.query(sql, 'wedding', function(error, result) {

        if(error) {
            return callback(error, null);
        }

        return callback(null, result);
    });

	return;
}
