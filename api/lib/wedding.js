var request = require('request');
var jsonfy  = require('jsonfy');
var date_format = require('date-format');
var mysql  = require('mysql');
var db      = require('./database');
var dbName = process.env.DB_NAME;

exports.addNewComment = function (param, callback) {

	var data = param;
	var dataName = data.name.trim();
	var dataPwd = data.pwd.trim();
	var dataContent = data.content.trim();

	if(typeof dataName === 'undefined' || dataName === ''){
		return callback({
			msg: "parameter is not valid"
		}, null);
	}

	if(typeof dataPwd === 'undefined' || dataPwd === ''){
		return callback({
			msg: "parameter is not valid"
		}, null);
	}

	if(typeof dataContent === 'undefined' || dataContent === ''){
		return callback({
			msg: "parameter is not valid"
		}, null);
	}

	var sql = '';
	sql  =' INSERT INTO ' + dbName + '.comment ';
	sql +=' SET `NAME` = ' + mysql.escape(dataName) + ', ';
	sql += ' `CONTENT` = ' + mysql.escape(dataContent) + ', ';
	sql += ' `PWD` = password(' + mysql.escape(dataPwd) + '), ';
	sql += ' `IS_DELETE` = "N" , ';
	sql += ' `W_TIME` = ' + mysql.escape(date_format('yyyyMMddhhmmss', new Date())) + '; ';

	console.log(sql);

	db.query(sql, 'wedding', function(error, result) {

        if(error) {
            return callback(error, null);
        }

        return callback(null, result);
    });
	return;
}
