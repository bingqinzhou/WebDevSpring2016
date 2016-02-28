/*** Created by bingqinzhou on 2/23/16.*/

(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController($scope, $rootScope,$location,UserService){

        $scope.login = login;

        function login(){

            $rootScope.currentUser = UserService.findUserByCredentials($scope.username,$scope.password);

            if($rootScope.currentUser){

                $location.url('/profile');

            }

        }
    }

})();
