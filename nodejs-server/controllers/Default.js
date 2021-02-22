'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.deleteItemsItemId = function deleteItemsItemId (req, res, next, itemId) {
  Default.deleteItemsItemId(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteUsersUserId = function deleteUsersUserId (req, res, next, userId) {
  Default.deleteUsersUserId(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItems = function getItems (req, res, next) {
  Default.getItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getItemsItemId = function getItemsItemId (req, res, next, itemId) {
  Default.getItemsItemId(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUsersUserId = function getUsersUserId (req, res, next, userId) {
  Default.getUsersUserId(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchItemsItemId = function patchItemsItemId (req, res, next, itemId) {
  Default.patchItemsItemId(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchUsersUserId = function patchUsersUserId (req, res, next, body, userId) {
  Default.patchUsersUserId(body, userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postItems = function postItems (req, res, next, body) {
  Default.postItems(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postUser = function postUser (req, res, next) {
  Default.postUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putItems = function putItems (req, res, next) {
  Default.putItems()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putItemsItemId = function putItemsItemId (req, res, next, itemId) {
  Default.putItemsItemId(itemId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putUsersUserId = function putUsersUserId (req, res, next, userId) {
  Default.putUsersUserId(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
