'use strict';

angular.module('starter.controllers').controller('chatController', function($scope, $state, chatService) {

  $scope.chat = chatService.getChat($state.params.chatId);
  $scope.chat.messages = chatService.getMessages($state.params.chatId);

  $scope.sendMessage = function(text) {
    console.log(text);
    var time = moment().unix();
    var message = {
      text: text,
      timestamp: time
    }
    chatService.postMessages($state.params.chatId, message);
    $scope.chat.text = '';
  }

});
