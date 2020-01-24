module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000
    },
    post: {
        port: process.env.POST_PORT || 3002
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'notasecret!',
    },
    mysql: {

        host: process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'rXwabxnnRi',
        password: process.env.MYSQL_PASS || 'xj228fDUFv',
        database: process.env.MYSQL_DB || 'rXwabxnnRi',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_PORT || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService: {
        host: process.env.MYSQL_SRV_PORT || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis: {
        host: process.env.REDIS_HOST || 'redis-17170.c82.us-east-1-2.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '17170',
        password: process.env.REDIS_PASS || 'UEnhSlZdxO4wSkquKT8KzQO94xRTM6AS',
    }
}
//https://backend-node-platzi.gbeto21.now.sh