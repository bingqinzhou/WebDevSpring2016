/*** Created by bingqinzhou on 2/23/16.*/

(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController",LoginController);

    function LoginController($scope, $rootScope,$location,UserService){

        $scope.login = login;

        function login(){
            UserService.findUserByCredentials({
                username: $scope.username,
                password: $scope.password
            }).then(function (response) {
                $rootScope.currentUser = response.data;
                if(response){
                    $location.url('/profile');
                }
            });
        }
    }

})();
