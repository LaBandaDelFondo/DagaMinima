'use strict';

angular.module('starter.controllers').controller('chatsController', function($scope, $state, chatService) {

  $scope.chats = chatService.getChats();

  $scope.remove = function(chat){
    chatService.removeChat(chat);
  }
});
