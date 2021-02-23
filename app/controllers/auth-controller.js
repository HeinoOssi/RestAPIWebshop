const db = require('../models');
const config = require('../config/auth-config.js');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const globalUser = require('../config/global-config.js')

exports.signup = (req, res)=>{
    // Save user to database
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateOfBirth: req.body.dateOfBirth,
        emailVerified: req.body.emailVerified,
        dateOfBirth: req.body.dateOfBirth,
        createDate: req.body.createDate,
        userName: req.body.userName,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .catch(err => {
        res.status(500).send({message: err.message});
    });
    res.send({message: 'User '+ req.body.userName +' was created succesfully!'});
    
};

exports.signin = (req,res) => {
    // Does user exist in database?
    User.findOne({
        where: {
            userName: req.body.username
        }
    }).then(user => {
        if (!user){
            return res.status(404).send({message: "User not found"});

        }

        // Is user password valid?
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if (!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid password"
            });

        }
        globalUser.globalUserID = user.idUser;

        var token = jwt.sign({
            id: user.id
        }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        // Everything is ok
        res.status(200).send({
            id: user.id,
            username: user.userName,
            email: user.email,
            firstname: user.firstName,
            lastname: user.lastName,
            accessToken: token

        });

        });
  
    ;
}