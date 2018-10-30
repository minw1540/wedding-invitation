/**
 * [DB 데이터베이스 설정 정보 반환 함수]
 * @param {[type]} db [사용할 데이터베이스]
 */
exports.DB = function(db) {

    return { host    : "127.0.0.1",
             port    : "3306",
             user    : "root",
             password: "ghltkrkwk##",
             database: db,
             acquireTimeout: 1000000 };
};