/*** Created by bingqinzhou on 2/23/16.*/

(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController($scope, $rootScope,$location,SecurityService){

        $scope.login = login;

        /**
        function login(){
            UserService.findUserByCredentials({
                username: $scope.username,
                password: $scope.password
            }).then(function (response) {
                if(response.data){
                    $rootScope.currentUser = response.data;
                    $location.url('/profile');
                }else{
                    console.log("fail to log in");
                }
            });
        }
         */

        function login(){
            SecurityService.login($scope.username, $scope.password)
                .then(function (response) {
                if(response.data){
                    $rootScope.currentUser = response.data;
                    $location.url('/profile');
                }else{
                    console.log("fail to log in");
                }
            });
        }

    }

})();
