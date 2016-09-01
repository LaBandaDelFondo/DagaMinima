'use strict';

angular.module('starter.services').factory('chatService', function(lodash) {

  var root = {};

  root.chats = [
    {
      id: '0',
      name: 'Marty McFly',
      picture: './img/mcfly.jpg',
      lastMessage: {
        text: 'Hey Doc!',
        timestamp: 1469644264
      }
    }, {
      id: '1',
      name: 'Evangelina',
      picture: './img/Evange.jpg',
      lastMessage: {
        text: 'Ya venis?',
        timestamp: 1469644264
      }
    }, {
      id: '2',
      name: 'Pipo',
      picture: './img/pipo.jpg',
      lastMessage: {
        text: 'Ehh wacho, todo bien?',
        timestamp: 1469644264
      }
    }
  ];

  root.messages = [
    {
      id: '0',
      messages: [{
        text: 'Hola viejo',
        timestamp: 1469644264
      },{
        text: 'Todo bien?',
        timestamp: 1469644264
      }]
    }
  ]

  root.getChats = function() {
    return root.chats;
  }

  root.getChat = function(id){
    return lodash.find(root.chats, {
      'id': id
    });
  }

  root.getMessages = function(id) {
    return lodash.find(root.messages,{
      'id': id
    }).messages;
  }

  root.postMessages = function(id, message){
    var newMessages = root.getMessages(id);
    newMessages.push(message);
  }

  root.removeChat = function(chat) {
    root.chats.splice(root.chats.indexOf(chat), 1);
  }

  return root;

})
