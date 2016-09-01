'use strict';

angular.module('starter.controllers').controller('sectionsController', function($scope, $timeout, $state, $ionicSideMenuDelegate, sectionsService, storageService, $cordovaSocialSharing, lodash, $ionicPopup) {

  $ionicSideMenuDelegate.canDragContent(true);
  $scope.showPaw = false;

  $scope.options = {
    loop: false,
    effect: 'flip',
    speed: 500,
    direction: 'vertical',
    spaceBetween: 0
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
    // data.slider is the instance of Swiper
    $scope.description = "This is a basic Card which contains an item that has wrapping text. Este es mi perro es el mejor perro del mundo por favor adoptalo se llama Jesú."

    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {

    $timeout(function() {
      $scope.$apply();
    }, 1);

    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });

  $scope.section = $state.params.section || 'Adopt';
  $scope.publications = sectionsService.getSectionPubs($scope.section);


  $scope.setFavorite = function(publication) {
    if (!$scope.isFavorite(publication)) {
      storageService.setFavoritePub(publication);
    } else {
      storageService.deleteFavoritePub(publication);
    }
  }

  $scope.isFavorite = function(publication) {
    return (lodash.findIndex(storageService.getFavoritePubs(), function(p) {
      return p.$$hashKey == publication.$$hashKey
    }) >= 0);
  }

  $scope.share = function(description, image) {
    $cordovaSocialSharing.share(description, $scope.section, null, "Compartido desde Aninder");
  }

  $scope.sectionsMorePopup = function() {

    var sectionsMorePopup = $ionicPopup.show({
      templateUrl: './views/includes/sectionsMorePopup.html',
      scope: $scope
    });

    $scope.report = function() {
      sectionsMorePopup.close();
    };

    $scope.savePhoto = function() {
      sectionsMorePopup.close();
    };
  }

  $scope.profilePopup = function(publication) {

    $scope.publication = publication;

    var profilePopup = $ionicPopup.show({
      templateUrl: './views/includes/sectionsProfilePopup.html',
      scope: $scope
    });

    $scope.cancel = function() {
      profilePopup.close();
    };

    $scope.openProfile = function(id) {
      //Change view to selected profile view
    }
  }

  $scope.contact = function(publication){
    console.log("contact");
    $scope.setFavorite(publication);
    $scope.showPaw = true;
    setTimeout(function() {
      $scope.$apply(function() {
        $scope.showPaw = false;
      });
    }, 750);
  }
});
