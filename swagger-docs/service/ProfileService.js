'use strict';


/**
 * To create a new users with all information related to the user like name, email id, password, bio, phone, isAdmin, isPublic 
 *
 * returns inline_response_200_3
 **/
exports.profileAllPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "phone" : "1234567890",
    "bio" : "Any text",
    "photo" : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
    "isPublic" : true,
    "email" : "sample@testing.com",
    "username" : "Widget Adapter"
  }, {
    "phone" : "1234567890",
    "bio" : "Any text",
    "photo" : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
    "isPublic" : true,
    "email" : "sample@testing.com",
    "username" : "Widget Adapter"
  } ],
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
 * To get users information 
 *
 * returns inline_response_200_1
 **/
exports.profileGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : {
    "phone" : "1234567890",
    "bio" : "Any text",
    "photo" : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
    "isPublic" : true,
    "email" : "sample@testing.com",
    "username" : "Widget Adapter"
  },
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
 * To update users information 
 *
 * body User_response To update user info (optional)
 * returns inline_response_200_2
 **/
exports.profilePUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "Profile updated successfully",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

