'use strict';

var utils = require('../utils/writer.js');
var Profile = require('../service/ProfileService');

module.exports.profileAllPOST = function profileAllPOST (req, res, next) {
  Profile.profileAllPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileGET = function profileGET (req, res, next) {
  Profile.profileGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profilePUT = function profilePUT (req, res, next, body) {
  Profile.profilePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
