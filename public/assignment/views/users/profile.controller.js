/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){

    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($scope,$rootScope,$location,UserService){

        var currentUser = $rootScope.currentUser;

        if(currentUser){

            $scope.username = currentUser.username;
            $scope.password = currentUser.password;
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

            $rootScope.currentUser = UserService.updateUser(currentUser._id,updatedUser);

            if(updatedUser){

                alert("Update the User Successfully!");

            }else{

                alert("Unable to Update the User!");

            }
        }
    }

})();