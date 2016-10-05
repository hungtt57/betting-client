'use strict';

angular.module('myApp.top100', ['ngRoute','myApp.config'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/top100', {
            templateUrl: 'top100/top100.html',
            controller: 'top100Ctrl'
        });
    }])

    .controller('top100Ctrl', ['$scope','$http','API_URL',function($scope,$http,API_URL) {

    }]);