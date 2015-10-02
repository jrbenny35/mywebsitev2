/**
 * Created by root on 9/30/15.
 */

'use strict';

var myApp = angular.module('webApp', [
    'ui.router',
    'ngAnimate',
    'controllers',
    'ngResource'

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
                templateUrl: 'partials/contact'
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
myApp.factory('Projects', function($resource) {
    return $resource('/api/projects/:id'); //full endpoint address
});