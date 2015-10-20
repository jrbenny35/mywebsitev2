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
    'ngMessages'

    ]);
myApp.config(function ($stateProvider, $locationProvider) {


        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'partials/main'
            })
            .state('home',{
                url: '/home',
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
            });

        $locationProvider.html5Mode(true);
    });

//Resources
myApp.factory('Projects', function($resource) {
    return $resource('/api/projects/:id'); //full endpoint address
});

myApp.factory('Contact', function($resource) {
    return $resource('/api/contact/:id'); //full endpoint address
});

myApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('red');

});