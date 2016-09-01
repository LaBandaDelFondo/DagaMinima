'use strict';

angular.module('starter').config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.views.maxCache(0);

  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $stateProvider
    .state('chat', {
      url: '/chats/:chatId',
      views: {
        'menuContent': {
          templateUrl: 'views/chat.html',
        }
      }
    })
    .state('chats', {
      url: '/chats',
      views: {
        'menuContent': {
          templateUrl: 'views/chats.html',
        }
      }
    })
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
    .state('sections', {
      url: '/sections/{section}',
      views: {
        'menuContent': {
          templateUrl: 'views/sections.html'
        }
      }
    })
    .state('profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'views/profile.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("sections");
  });
});
