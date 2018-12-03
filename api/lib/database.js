var config = require('./config'),
	mysql = require('mysql'),
	pool = {
		wedding: mysql.createPool(config.DB()),
	};

/**
 * @param {String}   query [SQL문]
 * @param {Function} callback [콜백 함수]
 */
exports.query = function(query, poolName, callback) {
	if (typeof poolName !== 'string' || typeof poolName === 'undefined' || poolName === '') {
		console.log('DB parameter empty!!');
		return callback({
			msg: "DB pool name is empty"
		}, null);
	}

	pool[poolName].getConnection(function(error, connection) {
		if (error) {
			console.log('DB connect error!!');
			console.log(error);
			return callback({
				msg: "DB connect error"
			}, null);
		}

		connection.query(query, function(error, result) {
			connection.release();
			// SQL 문 에러
			if (error) {
				console.log('SQL error!!');
				return callback({
					msg: "SQL error"
				}, null);
			}

			if (typeof callback !== 'undefined') {
				return callback(null, result);
			}

		});

	});
}
