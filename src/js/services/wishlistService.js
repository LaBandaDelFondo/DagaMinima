'use strict';

angular.module('starter.services').factory('wishlistService', function() {

  var root = {};

  root.favoritePubs = [];

  root.addFavoritePub = function(publication) {
    root.favoritePubs.push(publication);
  }

  root.getFavoritePubs = function() {
    return root.favoritePubs;
  }
  return root;
});
