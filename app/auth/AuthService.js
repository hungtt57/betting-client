'use strict';


angular.module('myApp.AuthService',[]).service('AuthService', function($cookieStore,$http,API_URL,$q){
    var userIsAuthenticated = false;

    this.setUserAuthenticated = function(value){
        userIsAuthenticated = value;
    };

    this.getUserAuthenticated = function(){
        return userIsAuthenticated;
    };


    this.setHeader = function(token){
        if (!token) {
            delete $http.defaults.headers.common['X-Token'];
            return;
        }
        $http.defaults.headers.common['X-Token'] = token.toString();
    }
    this.getToken = function(){
        return $cookieStore.get('token');
    }

    this.loginCallback = function (access_token,callback){
        var cb = callback || angular.noop;
        var deferred = $q.defer();
        $cookieStore.put('access_token', access_token);
        deferred.resolve({user:'hinkeu',name:'tienhung'});

        //
        // $http.post(API_URL+'/auth/login',{
        //     access_token:access_token
        // }).success(function(data) {
        //     $cookieStore.put('token', data.token);
        //     deferred.resolve(data);
        //     return cb();
        // }).error(function(err){
        //     deferred.inject(err);
        //     return cb(err);
        // });
        return deferred.promise;
    }

});