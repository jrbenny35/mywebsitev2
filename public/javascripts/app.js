/**
 * Created by root on 9/30/15.
 */

'use strict';

var myApp = angular.module('webApp', [
        'ngAnimate',
        'ui.router',
        'controllers'//Add restangular for rest functions

    ])
    .config(function ($urlrRouteProvider, $stateProvider, $locationProvider) {
        $urlrRouteProvider.otherwise('/home');

        $stateProvider
            .state('home',{
                url: '/home',
                templateUrl: 'public/views/main.html',
                controller: mainCtrl
            });

        $locationProvider.html5Mode(true);
    });