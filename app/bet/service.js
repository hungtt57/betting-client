'use strict';

angular.module('myApp.services',['myApp.config'])
    .service('Bets',['$http','API_URL', function ($http,API_URL) {
        return {
            getDetail: function(id) {
                var match =[
                    {
                        "id": 1,
                        "team_a_id": 1,
                        "team_a": {
                            "id": 1,
                            "name": "Team A",
                            "status": true,
                            "desc": "This is team A",
                            "image": '/assets/img-update/team1.png'
                        },
                        "team_b_id": 2,
                        "team_b": {
                            "id": 2,
                            "name": "Team B",
                            "status": true,
                            "desc": "Something",
                            "image": "/assets/img-update/team2.png"
                        },
                        "score_a": 0,
                        "score_b": 0,
                        "status": 0,
                        "rate_a": 15.0,
                        "rate_b": 14.0,
                        "rate_over": 15.0,
                        "rate_under": 85.0,
                        "python_match_id": 1,
                        "over_under_number": 20,
                        "round": 1
                    },
                    {
                        "id": 2,
                        "team_b_id": 1,
                        "team_b": {
                            "id": 1,
                            "name": "Team A",
                            "status": true,
                            "desc": "This is team A",
                            "image": '/assets/img-update/team1.png'
                        },
                        "team_a_id": 2,
                        "team_a": {
                            "id": 2,
                            "name": "Team B",
                            "status": true,
                            "desc": "Something",
                            "image": "/assets/img-update/team2.png"
                        },
                        "score_a": 0,
                        "score_b": 0,
                        "status": 0,
                        "rate_a": 16.0,
                        "rate_b": 10.0,
                        "rate_over": 45.0,
                        "rate_under": 12.0,
                        "python_match_id": 1,
                        "over_under_number": 12,
                        "round": 2
                    }

                ];
                 // return $http.get(API_URL + '/api/bet/'+id);
                return match
            },
            // getLists: function(params, callback) {
            //     $http.get('/api/tags', {
            //         params: params
            //     })
            //         .success(function(data, status, headers, config) {
            //             callback(data);
            //         })
            //         .error(function(data, status, headers, config) {
            //             callback(data);
            //         });
            // },
            // create : function(data,callback){
            //     $http.post('/api/tags',data)
            //         .success(function(data, status, headers, config) {
            //             callback(data);
            //         })
            //         .error(function(data, status, headers, config) {
            //             callback(data);
            //         });
            // },
            // getDetail : function(id,callback){
            //     $http.get('api/tags/'+id)
            //         .success(function(data, status, headers, config) {
            //             callback(data);
            //         }).
            //     error(function(data, status, headers, config) {
            //         callback(data);
            //     });
            //
            // },
            // update : function(id,data,callback){
            //     $http.put('api/tags/'+id,data)
            //         .success(function(data, status, headers, config) {
            //             callback(data);
            //         }).
            //     error(function(data, status, headers, config) {
            //         callback(data);
            //     });
            // },
            // deleteTag : function (id,callback){
            //     $http.delete('api/tags/'+id)
            //         .success(function(data, status, headers, config) {
            //             callback(data);
            //         }).
            //     error(function(data, status, headers, config) {
            //         Notification.error('Cannot delete !');
            //     });
            // }

        };
    }]);
