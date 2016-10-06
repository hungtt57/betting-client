'use strict';

angular.module('myApp.Auth',
    ['ngRoute',

    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/callback', {
            // templateUrl: 'auth/auth.html',
            template: " ",
            controller: 'AuthCtrl'

        });
    }])

    .controller('AuthCtrl', function ($scope, $http, $routeParams, AuthService,$cookieStore,$window) {
        var access_token = $routeParams.access_token;
        AuthService.loginCallback(access_token)
            .then(function () {
                console.log('da login xong');
                var url = $cookieStore.get('current_url');
                // $window.location.href = url;
             })
            .catch(function(err){

            });
        // $http({
        //     method: 'GET',
        //     url: '/lich-su-du-doan'
        // }).then(function successCallback(response) {
        //
        //     $scope.lsdd = response.data;
        //
        // }, function errorCallback(response) {
        //
        //     // called asynchronously if an error occurs
        //     // or server returns response with an error status.
        // });
    });