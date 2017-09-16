angular.module("myApp.page1", ['ngRoute', 'firebase'])
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider.when('/page1',{
            templateUrl: "page1/page1.html",
            controller:"page1Ctrl"



        });


    }]).controller('page1Ctrl',function($scope, $firebaseArray){
    var ref = firebase.database().ref("employees");
    $scope.data = $firebaseArray(ref);

    console.log('page1');

    $scope.deleteEmployee = function(info){
        $scope.data
            .$remove(info)
            .then(
                function(ref){
                    console.log(info);
                },


                function(error) {
                    console.log(error);

                }
            )
        console.log(info);
    }

})