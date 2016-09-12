'use strict';
angular.module('starter.services').factory('languageService', function languageService($translate, lodash, amMoment) {
  var root = {};

  root.availableLanguages = [{
    name: 'English',
    isoCode: 'en',
    }, {
    name: 'Español',
    isoCode: 'es',
    }];

  root.isAvailableLanguage = function(language) {
    return lodash.find(root.availableLanguages, {
      'isoCode': language
    }) ? language : 'en';
  };

  root.setPreferredLanguage = function() {
    if (!lodash.isUndefined(navigator.globalization)) {
      navigator.globalization.getPreferredLanguage(function(preferedLanguage) {

        var language = preferedLanguage.value;
        language = language ? (language.split("-")[0] || 'en') : 'en';

        // Set only available languages
        language = root.isAvailableLanguage(language);

        amMoment.changeLocale(language);
        $translate.use(language).then(function(data) {
          console.log("SUCCESS -> " + data);
        }, function(error) {
          console.log("ERROR -> " + error);
        });
      }, null);
    }
  };

  root.getLanguages = function() {
    return root.availableLanguages;
  };

  return root;
});
