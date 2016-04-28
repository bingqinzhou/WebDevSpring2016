/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){

    angular
        .module("MovieApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($scope,$rootScope,$location,UserService){

        var currentUser = $rootScope.currentUser;
        console.log(currentUser);

        if(currentUser){

            $scope.username = currentUser.username;
            $scope.password = currentUser.password;
            console.log($scope.password);
            $scope.firstName = currentUser.firstName;
            $scope.lastName = currentUser.lastName;
            $scope.email = currentUser.email;

        }else{
            $location.url("/home");
        }

        $scope.update = update;

        function update(){

            var updatedUser = {

                _id: currentUser._id,
                username: $scope.username,
                password: $scope.password,
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                email: $scope.email,
                roles: currentUser.roles

            }

            UserService.updateUser(currentUser._id,updatedUser)
                .then(
                    function(response){
                        $rootScope.currentUser = response.data;
                    }
                );

            if(updatedUser){
                alert("Update the User Successfully!");
            }else{
                alert("Unable to Update the User!");
            }
        }
    }

})();