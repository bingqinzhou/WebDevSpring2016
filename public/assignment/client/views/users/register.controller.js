(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

    function RegisterController($scope,$rootScope,$location,SecurityService){

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
                    email:$scope.email
                }
                SecurityService.register(newUser)
                    .then(function (response) {
                        if(response.data !== null){
                            $rootScope.currentUser = response.data;
                            $location.url('/profile');
                        }else{
                            console.log("here");
                            $location.url('/register');
                            alert("username has been occupied !")
                        }
                    });
            }
        }
    }

})();