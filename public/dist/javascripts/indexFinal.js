/**
 * Created by root on 9/30/15.
 */

'use strict';

var myApp = angular.module('webApp', [
    'ui.router',
    'ngAnimate',
    'controllers',
    'ngResource',
    'ngMaterial',
    'ngMessages',
    'ngMdIcons'

    ]);
myApp.config(function ($stateProvider, $locationProvider) {


        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'partials/main'
            })
            .state('about',{
                url: '/about',
                templateUrl: 'partials/about'
            })
            .state('contact',{
                url: '/contact',
                templateUrl: 'partials/contact',
                controller: 'ContactCtrl'
            })
            .state('contact-thankyou', {
                templateUrl: 'partials/contact-thankyou'
            })
            .state('projects',{
                url: '/projects',
                templateUrl: 'partials/projects',
                controller: 'ProjectsCtrl'
            })
            .state('resume',{
                url: '/resume',
                templateUrl: 'partials/resume'
            })
            .state('projectView',{
                url: '/projects/:id/view',
                templateUrl: 'partials/projectDetail',
                controller: 'ProjectViewCtrl'
            });

        $locationProvider.html5Mode(true);
    });

//Resources
myApp.factory('Projects', function($resource) {
    return $resource('/api/projects/:id', { id: '@_id' }); //full endpoint address
});

myApp.factory('Contact', function($resource) {
    return $resource('/api/contact/:id', { id: '@_id' }); //full endpoint address
});

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');

});
/**
 * Created by root on 10/1/15.
 */
'use strict';

var module = angular.module('controllers',[
]);

module.controller('ProjectsCtrl', ['$scope', 'Projects', function ($scope, Projects ) {

    $scope.projects = Projects.query();

}]);

module.controller('ProjectViewCtrl', ['$scope', 'Projects', '$stateParams', function ($scope, Projects, $stateParams ) {

    $scope.projects = Projects.get({ id: $stateParams.id });

}]);

module.controller('ContactCtrl', ['$scope', 'Contact', '$http', '$state', function ($scope, Contact, $http, $state) {


    $scope.contact = new Contact();

    $scope.saveContact = function(){

        $scope.contact.$save().then(function(){
            $state.go('contact-thankyou');
        });
    };
}]);//End ContactCtrl

module.controller('LeftCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('left').toggle();
    };


    $scope.close = function () {
      $mdSidenav('left').close();
    }

}]);

module.controller('RightNavCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    $scope.toggleSidenav = function () {
        $mdSidenav('right').toggle();
    }

}]);

module.controller('ResumeCtrl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

    $scope.showDialog = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'partials/resumeDialog',
            parent:
                angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
        })
    };

}]);

function DialogController($scope, $mdDialog){
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };
}
/**
 * Created by root on 9/30/15.
 */


$(function() {
    $('.gplus2').kycoGooglePlusFeed2({
        id: '105776773930659797989',
        feedPosts: 3, // Feed posts to show on load
        postsIncrement: 3, // Number of feed posts to show on "Show more" button click
        maxPosts: 3, // Max number of posts to pull before "Show more" will go to Google+, cannot excced 20 because of Google API in use
        profileImageSize: 75, // Max is 250
        orderBy: 'popularity',
        sort: 'asc',
        lang: 'en'
    });
});

