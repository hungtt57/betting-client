'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.bet',
    'myApp.Auth',
    'myApp.lichsududoan',
    'myApp.top100',
    'myApp.config',
    'myApp.services',
    'ui.bootstrap',
    'cgNotify'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/bet/1'});
}])
    .run(function ($rootScope, $location, Auth) {
        // Redirect to login if route requires auth and you're not logged in

        $rootScope.$on('$routeChangeStart', function (event, next) {
            if(next.authenticate && !Auth.getUserAuthenticated()){
                $location.path('/login');
            }
        });
    })

;

angular.module('myApp.config', [])
    .constant('APP_NAME', 'BETTING APP')
    .constant('APP_VERSION', '0.1')
    .constant('API_URL', 'http://www.google.com');