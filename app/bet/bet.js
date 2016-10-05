'use strict';

angular.module('myApp.bet', [
    'ngRoute',
    'myApp.config',
    'ui.bootstrap',
    'cgNotify'
])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/bet/:python_id', {
            templateUrl: 'bet/bet.html',
            controller: 'BetCtrl',
             authenticate : true
        });
    }])

    .controller('BetCtrl', ['$scope', '$routeParams', 'API_URL', 'Bets', '$uibModal','notify', function ($scope,$routeParams, API_URL, Bets, $uibModal,notify) {
        $scope.python_id = $routeParams.python_id;
        $scope.match = Bets.getDetail($scope.python_id);
        $scope.account_gold = 1000;
        notify.config({maximumOpen:'5',duration:'800'});
        $scope.popup_bet = function (team, match_round, rate) {
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalCtrl',
                controllerAs: '$modal',
                scope: $scope,
                resolve: {
                    team: function () {
                        return team;
                    },
                    match_round: function () {
                        return match_round;
                    },
                    rate: function () {
                        return rate;
                    }

                }
            });

        }

        $scope.popup_score = function (type, round, rate, number,match_round) {
            var modal = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'PopupScoreModal.html',
                controller: 'ModalScoreCtrl',
                controllerAs: '$modalScore',
                scope: $scope,
                resolve: {
                    type: function () {
                        return type;
                    },
                    round: function () {
                        return round;
                    },
                    rate: function () {
                        return rate;
                    },
                    number: function () {
                        return number;
                    },
                    match_round : function () {
                        return match_round;
                    }



                }
            });

        }
    }]).controller('ModalCtrl', function ($scope, team, match_round,rate, notify,$uibModalInstance) {

    $scope.popup_bet_checked = true;
    $scope.popup_bet_receive_gold = 0;
    $scope.popup_bet_rate = rate;
    $scope.popup_bet_team = team;
    $scope.popup_bet_match_round = match_round;

    $scope.change_bet_gold = function () {
        if ($scope.popup_bet_bet_gold > $scope.account_gold) {

            notify({message: 'Bạn đặt quá số vàng hiện có', position: 'right', classes: 'alert-danger'});
            $scope.popup_bet_bet_gold = '';
        }
        $scope.popup_bet_receive_gold = $scope.popup_bet_bet_gold * rate;
    };

    //click dong y
    $scope.ok = function () {

        if(typeof($scope.popup_bet_bet_gold)=='undefined' || $scope.popup_bet_bet_gold <=0){
            notify({message: 'Vui lòng nhập số vàng lớn hơn 0', position: 'right', classes: 'alert-danger'});
        }else{

            $uibModalInstance.close();
        }

    };
    //end dong y

}).controller('ModalScoreCtrl', function ($scope, notify, type, round, rate, number,match_round,$uibModalInstance) {

    $scope.popup_score_receive_gold = 0;
    $scope.popup_score_round = round;
    $scope.popup_score_rate = rate;
    $scope.popup_score_match_round = match_round;
    if (type == 'under') {
        $scope.popup_score_detail = 'Tổng ĐHG < ' + number;
    } else {
        $scope.popup_score_detail = 'Tổng ĐHG ≥ ' + number;
    }
    $scope.change_score_gold = function () {
        if ($scope.popup_score_bet_gold > $scope.account_gold) {
            notify({message: 'Bạn đặt quá số vàng hiện có', position: 'right', classes: 'alert-danger'});
            $scope.popup_score_bet_gold = '';
        }
        $scope.popup_score_receive_gold = $scope.popup_score_bet_gold * rate;
    };

    //click dong y
    $scope.popup_score_ok = function () {

        if(typeof($scope.popup_score_bet_gold)=='undefined' || $scope.popup_score_bet_gold <=0){
            notify({message: 'Vui lòng nhập số vàng lớn hơn 0', position: 'right', classes: 'alert-danger'});
        }else{

            $uibModalInstance.close();
        }

    };
    //end dong y

})
;
