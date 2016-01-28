var app = angular.module('customersApp', ['ui.router', 'ui.grid']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    .state('home', {
        controller: 'registerController as registerCtrl',
        url: '/home',
        templateUrl: 'app/views/home.html'
    })

    .state('allusers', {
    	controller: 'allUsersController as allUsersCtrl',
        url: '/allusers',
        templateUrl: 'app/views/allusers.html'
    })

});
