'use strict';

angular.module('starter')
    .config(function($translateProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage("en");
        $translateProvider.fallbackLanguage("en");
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.forceAsyncReload(true);
    })
    .run(function($ionicPlatform, $translate) {
        $ionicPlatform.ready(function() {
            if(typeof navigator.globalization !== "undefined") {
                navigator.globalization.getPreferredLanguage(function(language) {
                    $translate.use((language.value).split("-")[0]).then(function(data) {
                        console.log("SUCCESS -> " + data);
                    }, function(error) {
                        console.log("ERROR -> " + error);
                    });
                }, null);
            }
        });
    });
