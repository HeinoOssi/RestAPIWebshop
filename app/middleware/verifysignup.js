const db = require('../models');
const User = db.user;

// Check for duplicate email or username
checkDuplicate = (req,res,next) => {
    User.findOne({ 
        where: { username: req.body.userName 
        }
    }).then(user =>{
        if (user){
            res.status(400).send({
                message: "Username already in use"
            });
            return;
        }

        User.findOne({ where: { 
            email: req.body.email
        }
    }).then(user => {
        if (user){
            res.status(400).send({
                message: "Email already in use"
            });
            return;
        }
        
        next();
    });
    });
};

const verifySignUp = {
    checkDuplicate: checkDuplicate
};
  
module.exports = verifySignUp;