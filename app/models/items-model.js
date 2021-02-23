module.exports = (sequelize, Sequelize) =>{
    const Items = sequelize.define("items", {
        idItems: { type: Sequelize.INTEGER, primaryKey: true},
        idUser: { type: Sequelize.INTEGER},
        title: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        category: { type: Sequelize.STRING },
        askingPrice: { type: Sequelize.INTEGER },
        deliveryType: { type: Sequelize.STRING },
        address: { type: Sequelize.STRING },
        postalCode: { type: Sequelize.INTEGER },
        city: { type: Sequelize.STRING }

    });
    return Items;
};