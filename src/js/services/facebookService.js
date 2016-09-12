'use strict';

angular.module('starter.services').factory('facebookService', function($http, $log) {

  var root = {};

  root.setUser = function(user, cb) {
    var req = {
      method: 'POST',
      url: 'http://192.168.1.108:3000/login',
      headers: {
        'Content-Type': 'application/json'
      },
      data: user
    };

    $http(req).then(function(data) {
      return cb(null, data.data);
    }, function(err) {
      return cb(err);
    });
  };

  root.getUser = function(userID, cb) {
    var req = {
      method: 'GET',
      url: 'http://192.168.1.108:3000/login/' + userID,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };
    $http(req).then(function(data) {
      return cb(null, data.data);
    }, function(err) {
      return cb(err);
    });
  };

  return root;
});
