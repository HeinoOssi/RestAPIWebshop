'use strict';


/**
 * Delete single item
 *
 * itemId String 
 * no response value expected for this operation
 **/
exports.deleteItemsItemId = function(itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete the user
 *
 * userId Integer Id of an existing user.
 * no response value expected for this operation
 **/
exports.deleteUsersUserId = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Your GET endpoint
 * Gets items being sold
 *
 * no response value expected for this operation
 **/
exports.getItems = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Your GET endpoint
 * Gets information of a single item
 *
 * itemId String 
 * returns Items
 **/
exports.getItemsItemId = function(itemId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contactInformation" : {
    "country" : "country",
    "sellerId" : 1,
    "address" : "address",
    "city" : "city",
    "postalCode" : 5
  },
  "askingPrice" : 6.027456183070403,
  "deliveryType" : "deliveryType",
  "description" : "description",
  "id" : 0,
  "dateOfPosting" : "dateOfPosting",
  "title" : "title",
  "category" : "category"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get User Info by User ID
 * Retrieve the information of the user with the matching user ID.
 *
 * userId Integer Id of an existing user.
 * returns User
 **/
exports.getUsersUserId = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "emailVerified" : true,
  "password" : "password",
  "dateOfBirth" : "1997-10-31T00:00:00.000+0000",
  "id" : 0,
  "userName" : "userName",
  "email" : "",
  "createDate" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * itemId String 
 * no response value expected for this operation
 **/
exports.patchItemsItemId = function(itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update User Information
 * Update the infromation of an existing user.
 *
 * body Body Patch user properties to update. (optional)
 * userId Integer Id of an existing user.
 * returns User
 **/
exports.patchUsersUserId = function(body,userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "emailVerified" : true,
  "password" : "password",
  "dateOfBirth" : "1997-10-31T00:00:00.000+0000",
  "id" : 0,
  "userName" : "userName",
  "email" : "",
  "createDate" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new item
 *
 * body Items  (optional)
 * returns Items
 **/
exports.postItems = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "contactInformation" : {
    "country" : "country",
    "sellerId" : 1,
    "address" : "address",
    "city" : "city",
    "postalCode" : 5
  },
  "askingPrice" : 6.027456183070403,
  "deliveryType" : "deliveryType",
  "description" : "description",
  "id" : 0,
  "dateOfPosting" : "dateOfPosting",
  "title" : "title",
  "category" : "category"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create New User
 * Create a new user.
 *
 * returns User
 **/
exports.postUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "emailVerified" : true,
  "password" : "password",
  "dateOfBirth" : "1997-10-31T00:00:00.000+0000",
  "id" : 0,
  "userName" : "userName",
  "email" : "",
  "createDate" : "2000-01-23"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * no response value expected for this operation
 **/
exports.putItems = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 *
 * itemId String 
 * no response value expected for this operation
 **/
exports.putItemsItemId = function(itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user
 *
 * userId Integer Id of an existing user.
 * no response value expected for this operation
 **/
exports.putUsersUserId = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

