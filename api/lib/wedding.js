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
	sql += ' INSERT INTO ' + dbName + '.comment ';
	sql += ' SET `NAME` = ' + mysql.escape(dataName) + ', ';
	sql += ' `CONTENT` = ' + mysql.escape(dataContent) + ', ';
	sql += ' `PWD` = password(' + mysql.escape(dataPwd) + '), ';
	sql += ' `IS_DELETE` = "N" , ';
	sql += ' `W_TIME` = ' + mysql.escape(date_format('yyyyMMddhhmmss', new Date())) + '; ';

	console.log(sql);

	db.query(sql, 'wedding', function(error, result) {

        if(error) {
            return callback(error, null);
        }

		sql = '';
		sql  = ' SELECT ';
		sql += ' NO as `no`, ';
		sql += ' NAME as `name`, ';
		sql += ' CONTENT as `content` ';
		sql += ' FROM ' + dbName + '.comment ';
		sql += ' WHERE `IS_DELETE` != "Y" '
		sql += ' AND `PWD` = password(' + mysql.escape(dataPwd) + ') ';
		sql += ' AND `NAME` = ' + mysql.escape(dataName) + ' ';
		sql += ' AND `CONTENT` = ' + mysql.escape(dataContent) + ' ';
		sql += ' ORDER BY `NO` DESC LIMIT 1 ;';

		console.log(sql);

		db.query(sql, 'wedding', function(error, result) {

	        if(error) {
	            return callback(error, null);
	        }

	        return callback(null, result);
	    });
    });
	return;
}

exports.getCommentList = function (callback) {

	var sql = '';
	sql += ' SELECT ';
	sql += ' NO as `no`, ';
	sql += ' NAME as `name`, ';
	sql += ' CONTENT as `content` ';
	sql += ' FROM ' + dbName + '.comment ';
	sql += ' WHERE `IS_DELETE` != "Y" '
	sql += ' ORDER BY `NO` DESC ;';

	console.log(sql);

	db.query(sql, 'wedding', function(error, result) {

        if(error) {
            return callback(error, null);
        }

        return callback(null, result);
    });
	return;
}

exports.deleteComment = function (param,callback) {

	var data = param;
	var dataPwd = data.pwd.trim();
	var dataNo = data.no.trim();

	if(typeof dataPwd === 'undefined' || dataPwd === ''){
		return callback({
			msg: "parameter is not valid"
		}, null);
	}

	if(typeof dataNo === 'undefined' || dataNo === ''){
		return callback({
			msg: "parameter is not valid"
		}, null);
	}

	var sql = '';
	sql  = ' SELECT * FROM ' + dbName + '.comment ';
	sql += ' WHERE `IS_DELETE` != "Y" '
	sql += ' AND `PWD` = password(' + mysql.escape(dataPwd) + ') ';
	sql += ' AND `NO` = ' + mysql.escape(dataNo) + '; ';

	console.log(sql);

	db.query(sql, 'wedding', function(error, result) {

        if(error) {
            return callback(error, null);
        }

		if(result.length < 1){
			return callback(null, result);
		}

		sql  = '';
		sql += ' UPDATE ' + dbName + '.comment ';
		sql += ' SET `IS_DELETE` = "Y" ';
		sql += ' WHERE `PWD` = password(' + mysql.escape(dataPwd) + ') ';
		sql += ' AND `NO` = ' + mysql.escape(dataNo) + '; ';

		console.log(sql);

		db.query(sql, 'wedding', function(error, result) {

	        if(error) {
	            return callback(error, null);
	        }

	        return callback(null, result);
	    });
    });

	return;
}
