var app = angular.module('temApp', ['ui.router','ngMaterial','ngAnimate','smart-table','ngSanitize','ui.bootstrap']);



var hostUrl="http://localhost:9091/";

// var hostUrl="http://52.15.225.178:9091/";

app.config(function($stateProvider, $urlRouterProvider,$compileProvider) {

    $urlRouterProvider.otherwise('/signUp');
    $stateProvider

        .state('signUp', {

            url: '/signUp',

            templateUrl: 'resources/modules/SignUp/signUp.html'

        })

        .state('logIn', {

            url: '/logIn',

            templateUrl: 'resources/modules/LogIn/logIn.html'

        })

        .state('home', {

            url: '/home',

            templateUrl: 'resources/modules/Home/home.html'

        })
    
    });
