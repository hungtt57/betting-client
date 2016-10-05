'use strict';

angular.module('myApp.lichsududoan', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/lich-su-du-doan', {
    templateUrl: 'lichsududoan/lichsududoan.html',
    controller: 'LsddCtrl'
  });
}])

.controller('LsddCtrl', ['$scope','$http',function($scope,$http) {
    $http({
      method: 'GET',
      url: '/lich-su-du-doan'
    }).then(function successCallback(response) {

      $scope.lsdd = response.data;

    }, function errorCallback(response) {

      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
}]);