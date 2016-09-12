'use strict';

angular.module('starter.services').factory('storageService', function($http, $log, lodash) {

  var root = {};

  root.setLocalUser = function(user) {
    console.log('saving user in local storage');
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  root.getLocalUser = function() {
    return JSON.parse(window.localStorage.user || '{}');
  };

  root.deleteLocalUser = function() {
    window.localStorage.removeItem('user');
  };

  root.getCurrentLanguage = function() {
    return window.localStorage.NG_TRANSLATE_LANG_KEY;
  };

  root.setFavoritePub = function(publication) {
    var newFavoritePubs = root.getFavoritePubs();
    newFavoritePubs.push(publication);
    window.localStorage.setItem('favoritePubs', JSON.stringify(newFavoritePubs));
  };

  root.deleteFavoritePub = function(publication) {
    var newFavoritePubs = root.getFavoritePubs();
    newFavoritePubs.splice(lodash.findIndex(newFavoritePubs, function(p) {
      return p.$$hashKey == publication.$$hashKey
    }), 1);
    window.localStorage.setItem('favoritePubs', JSON.stringify(newFavoritePubs));
  };

  root.getFavoritePubs = function() {
    return JSON.parse(window.localStorage.favoritePubs || '[]');
  };

  return root;
});
