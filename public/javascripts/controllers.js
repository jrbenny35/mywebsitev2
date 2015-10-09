/**
 * Created by root on 10/1/15.
 */
'use strict';

var module = angular.module('controllers',[
]);

module.controller('ProjectsCtrl', ['$scope', 'Projects', function ($scope, Projects ) {

    $scope.projects = Projects.query();

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', '$http', '$state', function ($scope, Contact, $http, $state) {


    $scope.contact = new Contact();

    $scope.saveContact = function(){

        $scope.contact.$save().then(function(){
            $state.go('contact-thankyou');
        });
    };



}]);//End ContactCtrl

