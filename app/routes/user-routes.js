const {authJwt} = require('../middleware');
const controller = require('../controllers/user-controller.js');

module.exports = function(app) {
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Get all items being sold
    app.get('/api/items', controller.getAllitems);
    // Get an item by the ID
    app.get('/api/items/:id', controller.getItemById);
    // Delete an item by the ID
    app.delete('/api/items/:id', [authJwt.verifyToken], controller.deleteItemById);
    // Update an item by the ID
    app.patch('/api/items/:id',[authJwt.verifyToken], controller.updateItemById);
    // Post a new item
    app.post('/api/items', [authJwt.verifyToken], controller.addNewItem);
    // Get an user by the ID
    app.get('/api/users/:id', [authJwt.verifyToken], controller.getUserById);
    // Update an user by the ID
    app.patch('/api/users/:id',[authJwt.verifyToken], controller.updateUserById);
    // Delete an user by the ID
    app.delete('/api/users/:id', [authJwt.verifyToken], controller.deleteUserById);
   
}