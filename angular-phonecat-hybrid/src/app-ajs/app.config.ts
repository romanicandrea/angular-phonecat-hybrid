'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider: any) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
