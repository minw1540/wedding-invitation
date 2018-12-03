/**
 * [DB 데이터베이스 설정 정보 반환 함수]
 * @param {[type]} db [사용할 데이터베이스]
 */
exports.DB = function() {
    return { host    : process.env.DB_HOST,
             port    : process.env.DB_PORT,
             user    : process.env.DB_USER,
             password: process.env.DB_PASSWORD,
             database: process.env.DB_NAME,
             acquireTimeout: 1000000 };
};
