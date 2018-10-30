var config = require('./config'),
    mysql  = require('mysql'),
    pool   = {
                wedding     : mysql.createPool(config.DB('wedding')),
            };

/**
 * @param {String}   query [SQL문]
 * @param {Function} callback [콜백 함수]
 */
exports.query = function(query, db, callback) {
    if(typeof db !== 'string' || typeof db === 'undefined' || db === '') {
        console.log('DB parameter empty!!');
        return callback({error: "parameters empty" }, null);
    }

    pool[db].getConnection(function(error, connection) {
        if(error) {
            console.log('DB connect error!!');
            console.log(error);
            return callback(error, null);
        }

        connection.query(query, function(error, result) {
            connection.release();
            // SQL 문 에러
            if(error) {
                console.log('SQL error!!');
                return callback(error, null);
            }

            if(typeof callback !== 'undefined') {
                return callback(null, result);
            }

        });

    });
}
