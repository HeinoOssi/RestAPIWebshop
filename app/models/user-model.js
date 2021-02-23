/*
Represents user table in MySQL database.
*/
module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define("user", {
        idUser: { type: Sequelize.INTEGER, primaryKey: true},
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        dateOfBirth: { type: Sequelize.DATE },
        emailVerified: { type: Sequelize.INTEGER },
        userName: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING }

    });
    return User;
};