module.exports = {
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
        password: process.env.MYSQL_PASS || '7Vw6D2zjg4',
        database: process.env.MYSQL_DB || 'rXwabxnnRi',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_PORT || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    }
}