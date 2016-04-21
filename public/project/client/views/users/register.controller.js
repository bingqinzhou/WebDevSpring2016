(function(){
    angular
        .module("MovieApp")
        .controller("RegisterController",RegisterController);

    function RegisterController($scope,$rootScope,$location,UserService){

        $scope.register = register;

        function register(){

            if($scope.password != $scope.verifiedPassword){

                alert("Failed to varify your password! Please enter password again!");
                $scope.password = "";
                $scope.verifiedPassword = "";

            }else{

                var newUser = {
                    username:$scope.username,
                    password:$scope.password,
                    email:$scope.email,
                    roles:["user"]
                }

                $rootScope.currentUser = UserService.createUser(newUser);
                $location.url('/profile');

            }
        }
    }

})();