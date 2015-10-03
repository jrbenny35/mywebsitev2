/**
 * Created by root on 10/1/15.
 */
'use strict';

var module = angular.module('controllers',[
]);

module.controller('ProjectsCtrl', ['$scope', 'Projects', function ($scope, Projects ) {

    $scope.projects = Projects.query();

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', '$http', 'ContactForm', function ($scope, Contact, $http, ContactForm) {

    $scope.contact = new Contact();

    $scope.saveContact = function(){
        $scope.contact.$save();
    };

    $scope.sendEmail = function(){

        var data = ({
            contactName : $scope.name,
            contactEmail : $scope.email,
            contactMessage : $scope.message
        });

        $http({
            method: 'POST',
            url: '/contact-form',
            data: data
        });
    };


}]);//End ContactCtrl

