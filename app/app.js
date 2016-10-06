'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myApp.bet',
    'myApp.AuthService',
    'myApp.lichsududoan',
    'myApp.top100',
    'myApp.config',
    'myApp.services',
    'myApp.Auth',
    'ui.bootstrap',
    'cgNotify'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    // $locationProvider.hashPrefix('!');
    // $routeProvider.otherwise({redirectTo: '/bet/1'});
}])
    .run(function ($rootScope, $location, AuthService, AUTH_SERVER, $window, AUTH_CLIENT_ID,AUTH_CALLBACK,$cookieStore) {
        // Redirect to login if route requires auth and you're not logged in

        $rootScope.$on('$routeChangeStart', function (event, next) {
            if (next.authenticate && !AuthService.getUserAuthenticated()) {
                $cookieStore.put('current_url',$location.absUrl());
                 $window.location.href = AUTH_SERVER + '/oauth/login' + '?response_type=token&client_id=' + AUTH_CLIENT_ID + '&redirect_uri='+ AUTH_CALLBACK + '&all_platforms=1';
             }
        });
    })

;

angular.module('myApp.config', [])
    .constant('APP_NAME', 'BETTING APP')
    .constant('APP_VERSION', '0.1')
    .constant('API_URL', 'http://www.google.com')
    .constant('AUTH_CALLBACK', 'http://localhost:8000/callback')
    .constant('AUTH_SERVER', 'http://localconnect.garena.vn')
    .constant('AUTH_CLIENT_ID', 'ca86063d4ced2e6dd72a5bae88b5e7c3');