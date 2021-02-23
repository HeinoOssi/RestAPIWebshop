const db = require('../models');
const User = db.user;
const Item = db.items;
const globaluser = require('../config/global-config.js');

exports.getAllitems = (req,res)=> {
    // Get all items being sold on database
    Item.findAll({
        attributes: ['title', 'description', 'category', 'createdAt', 'address', 'postalCode', 'city']
    }).then((items)=>{
        res.status(200).send(items);
    });
    
}

exports.getItemById = (req,res)=> {
    // Get item by ID
    Item.findOne({
        where: {idItems: req.params.id}
    }).then((item)=>{
        res.status(200).send(item);
    });
}

exports.deleteItemById = (req,res)=> {
    // Delete item by id
    // Check if the user is allowed to delete the item
    Item.findOne({
        where: {idItems: req.params.id},
        attributes: ['idUser']
    }).then((item)=>{
        // Check if useris allowed to delete the items
        if (item.idUser === globaluser.globalUserID){
            Item.destroy({
                where: {idItems: req.params.id}
            })
        };
    });

}

exports.updateItemById = (req,res)=>{
    // Update item by id
    // Check if the user is allowed to update the item
    res.status(200).send("Update item by id");
    Item.update({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        askingPrice: req.body.askingPrice,
        deliveryType: req.body.deliveryType,
        address: req.body.address,
        postalCode: req.body.postalCode,
        city:req.body.city 
    }.then((changed_data, rowsupdated)=>{
        console.log(changed_data, rowsupdated);

    }).catch((error)=>{
        console.log(error);
    }))

}

exports.addNewItem = (req,res)=>{
    // Add new item
    Item.create({
        idUser: globaluser.globalUserID,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        askingPrice: req.body.askingPrice,
        deliveryType: req.body.deliveryType,
        address: req.body.address,
        postalCode: req.body.postalCode,
        city:req.body.city 
    }).catch(err => {
        res.status(500).send({message: err.message});
    });
    res.send({message: 'Item '+ req.body.title +' was added succesfully!'});

}

exports.getUserById = (req,res)=>{
    // Get user by id
    User.findOne({
        where: {idUser: req.params.id}
    }).then((user)=>{
        res.status(200).send(user);
    });

}

exports.updateUserById = (req, res) => {
    // Update user by id
    User.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        emailVerified: req.body.emailVerified,
        dateOfBirth: req.body.dateOfBirth,
        createDate: req.body.createDate,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then((changed_data, rowsupdated)=>{
        console.log(changed_data, rowsupdated);

    }).catch(err => {
        console.log(error);
    })
}
exports.deleteUserById = (req,res) => {
    // Delete user by id
    User.destroy({
        where: {idUser: req.params.id}
    
    });
    
}