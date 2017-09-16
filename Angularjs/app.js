angular.module("myApp", ['ngRoute','myApp.page1', 'myApp.page2','myApp.page3'])
    .config(['$routeProvider','$locationProvider', function($routeProvider) {
        // $locationProvider.hashvalue('!');
        $routeProvider.otherwise({

            redirectTO:"/page1"
        })


    }]);
