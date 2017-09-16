angular.module("myApp.page3", ['ngRoute','firebase'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/page3/:id',{
            templateUrl: "page3/page3.html",
            controller:"page3Ctrl"

        });


    }]).controller('page3Ctrl',function($scope, $firebaseArray, $firebaseObject, $routeParams){
    var id = $routeParams.id;
    var ref =  firebase.database().ref("employees/" + id);
    $scope.employee = $firebaseObject(ref);

    $scope.editEmployee = function(id) {

        console.log(id);

        var ref =  firebase.database().ref("employees/" + id);
        ref.update({

            name:$scope.employee.name,
            department:$scope.employee.department,
            phone:$scope.employee.phone,

        })
            .then(function(ref){

                    $scope.employee.name = "";
                    $scope.employee.department ="";
                    $scope.employee.phone ="";

                },

                function(error){

                    console.log("error");
                }

            )

        ;



    }


})