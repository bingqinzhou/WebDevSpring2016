/*** Created by bingqinzhou on 2/23/16.*/

(function(){
    angular
        .module("MovieApp")
        .controller("LoginController",LoginController);

    function LoginController($scope, $rootScope,$location,UserService,SecurityService){

        $scope.login = login;

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
