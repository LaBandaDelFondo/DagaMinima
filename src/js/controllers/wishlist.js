
'use strict';

angular.module('starter.controllers').controller('wishlistController', function($scope, $rootScope, $state, wishlistService) {
  $scope.favoritePubs = wishlistService.getFavoritePubs();
});
