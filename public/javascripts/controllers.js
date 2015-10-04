/**
 * Created by root on 10/1/15.
 */
'use strict';

var module = angular.module('controllers',[
]);

module.controller('ProjectsCtrl', ['$scope', 'Projects', function ($scope, Projects ) {

    $scope.projects = Projects.query();

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', '$http', function ($scope, Contact, $http) {


    $scope.contact = new Contact();

    $scope.saveContact = function(){

        $scope.contact.$save();
    };



}]);//End ContactCtrl

