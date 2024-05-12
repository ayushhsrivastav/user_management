'use strict';


/**
 * To login into an account of an existing by providing authentication token in response which can be used in other APIs 
 *
 * body Auth_login_body  (optional)
 * returns inline_response_200
 **/
exports.authLoginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9....",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To create a new users with all information related to the user like name, email id, password, bio, phone, isAdmin, isPublic 
 *
 * body User All parameter to create user (optional)
 * returns inline_response_201
 **/
exports.authRegisterPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "User registered successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

