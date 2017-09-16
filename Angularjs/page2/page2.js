angular.module("myApp.page2", ['ngRoute','firebase'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/page2',{
            templateUrl: "page2/page2.html",
            controller:"page2Ctrl"

        });


    }]).controller('page2Ctrl',function($scope, $firebaseArray){
    $scope.addEmployee = function () {
        var ref =  firebase.database().ref("employees");
        $firebaseArray(ref).$add($scope.employee)
            .then(
                function (ref) {
                    $scope.employee.name = "";
                    $scope.employee.department="";
                    $scope.employee.phone="";

                },
                function (error) {
                    console.log(error);

                }

            )

    }

    console.log('page2');

})