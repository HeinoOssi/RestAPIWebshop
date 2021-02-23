module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'root',
    DB: 'avkmdb',
    dialect: 'mysql',
    pool: {
        // Optional, used in Sequelize connection configuration
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}