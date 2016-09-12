'use strict';

angular.module('starter.controllers').controller('profileController', function($scope, $timeout, $ionicPopup, storageService, facebookService) {

  var user = storageService.getLocalUser();

  facebookService.getUser(user.userID, function(err, data) {
    if (err) {
      console.log("could not get data from server: " + JSON.stringify(err));
      return;
    }
    console.log("Success get request from server: " + JSON.stringify(data));

    $scope.user = data;
    $timeout(function() {
      $scope.$apply();
    }, 1);
  });

  $scope.descriptionPopup = function() {

    var descriptionPopup = $ionicPopup.show({
      templateUrl: './views/includes/descriptionPopup.html',
      scope: $scope
    });

    $scope.cancel = function() {
      descriptionPopup.close();
    };

    $scope.accept = function(about) {
      $scope.user.about = about;
      descriptionPopup.close();
    };
  }

  $scope.publications = [
    {
      authorAvatar: './img/mcfly.jpg',
      authorName: 'Marty McFly',
      postDate: 1469644264,
      principalImage: './img/img1.jpg',
      description: 'Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú.',
      likesCount: 1,
      commentsCount: 5
        },
    {
      authorAvatar: './img/Evange.jpg',
      authorName: 'Evangelina Anderson',
      postDate: 1469644264,
      principalImage: './img/img2.jpeg',
      description: 'Este es mi perro Carlos, adoptalo se la banca',
      likesCount: 35,
      commentsCount: 556
        },
    {
      authorAvatar: './img/pipo.jpg',
      authorName: 'Pipo Cipolatti',
      postDate: 1469644264,
      principalImage: './img/img3.jpeg',
      description: 'Miralo a Juan quiere un familia',
      likesCount: 23,
      commentsCount: 13
        }
    ];
});
