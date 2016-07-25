'use strict';

angular.module('starter.controllers').controller('publishController', function($scope, $cordovaImagePicker, $cordovaCamera, $ionicPlatform, $state) {

  $scope.images = [];

  $scope.fromCamera = function() {
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  }

  $scope.fromGallery = function() {
    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80
    };

    $cordovaImagePicker.getPictures(options)
      .then(function(results) {
        for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
        }
      }, function(error) {
        // error getting photos
      });
  }

  var deregister = $ionicPlatform.registerBackButtonAction(function() {
    $state.go('home');
  }, 101);

  $scope.$on('$destroy', deregister);
});
