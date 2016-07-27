'use strict';

angular.module('starter.controllers').controller('settingsController', function($scope, $state, $translate) {
    $scope.changeLanguage = function(key) {
        $translate.use(key);
    };
});
