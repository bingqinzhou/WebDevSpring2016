/*this is a controller js file*/
(function(){
    angular
        .module("FormBuilderApp")
        .controller("AdminController",AdminController);

    function AdminController($scope,UserService){

        $scope.addUser = addUser;
        $scope.updateUser = updateUser;
        $scope.deleteUser = deleteUser;
        $scope.selectUser = selectUser;
        $scope.sort = sort;

        $scope.currentUser = null;
        $scope.ascending = false;
        $scope.sortColumn = null;

        $scope.usernameComp = usernameComp;
        $scope.firstnameComp = firstnameComp;
        $scope.lastnameComp = lastnameComp;

        function refresh(){
            UserService.findAllUsers()
                .then(function(response){
                    $scope.users = response.data;
                });
        }

        refresh();

        function sort(comparator){
            toggle();
            $scope.users.sort(comparator);
            if(!$scope.ascending){
                $scope.users.reverse();
            }
        }

        function toggle(){
            if($scope.ascending){
                $scope.ascending = false;
            }else{
                $scope.ascending = true;
            }
        }

        function usernameComp(user1,user2){
            $scope.sortColumn = 1;
            return user1.username.localeCompare(user2.username);
        }

        function firstnameComp(user1,user2){
            $scope.sortColumn = 2;
            return user1.firstName.localeCompare(user2.firstName);
        }

        function lastnameComp(user1,user2){
            $scope.sortColumn = 3;
            return user1.lastName.localeCompare(user2.lastName);
        }

        function emptyInput(){
            $scope.username = "";
            $scope.password = "";
            $scope.firstName = "";
            $scope.lastName = "";
            $scope.roles = "";
        }

        function addUser(){
            var newUser = {"username":$scope.username,"password":$scope.password,
                           "firstName":$scope.firstName,"lastName":$scope.lastName,
                           "roles":$scope.roles}
            UserService.createUser(newUser);
            refresh();
            emptyInput();
        }

        function selectUser($index){
            $scope.currentUser = $scope.users[$index];
            $scope.username = $scope.currentUser.username;
            $scope.password = $scope.currentUser.password;
            $scope.firstName = $scope.currentUser.firstName;
            $scope.lastName = $scope.currentUser.lastName;
            $scope.roles = $scope.currentUser.roles;
        }

        function getRoles(){
            var string = $scope.roles+'';
            var roles = string.split(",");
            return roles;
        }

        function updateUser(){

            var userId = $scope.currentUser._id;
            var roles = getRoles();
            var newUser = {"_id":userId,"username":$scope.username,"password":$scope.password,
                           "firstName":$scope.firstName,"lastName":$scope.lastName,
                           "email":$scope.currentUser.email, "phone":$scope.currentUser.phone,
                            "roles":roles};
            console.log(newUser);
            UserService.updateUser(userId,newUser);
            refresh();
            emptyInput();
        }

        function deleteUser($index){
            var user = $scope.users[$index];
            UserService.deleteUserById(user._id);
            refresh();
        }
    }

})();

