'use strict';

angular.module('starter').config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $stateProvider

    .state('wishlist', {
    url: '/wishlist',
    views: {
      'menuContent': {
        templateUrl: 'views/wishlist.html',
      }
    }
  })

    .state('publish', {
    url: '/publish',
    views: {
      'menuContent': {
        templateUrl: 'views/publish.html',
      }
    }
  })

  .state('facebook', {
    url: '/facebook',
    views: {
      'menuContent': {
        templateUrl: 'views/facebook.html',
      }
    }
  })

  .state('posts', {
    url: '/posts',
    views: {
      'menuContent': {
        templateUrl: 'views/posts.html',
      }
    }
  })

  .state('settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'views/settings.html',
      }
    }
  })

  .state('home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'views/home.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("home");
  });
});
