const {verifySignUp} = require('../middleware');
const controller = require('../controllers/auth-controller.js');

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Register new user
    app.post("/api/user/signup", [
        verifySignUp.checkDuplicate
    ],
    controller.signup
    );

    // Log in as an existing user
    app.post("/api/user/signin", controller.signin);
};