(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService",UserService);

    function UserService($http){

        var services = {

            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById:deleteUserById,
            updateUser:updateUser,
            findUserByUserName:findUserByUserName

        }

        return services;

        function findUserByCredentials(credential){
            return $http.get("/api/userCred/" + credential.username + "/" + credential.password);
        }

        function findUserByUserName(username){
            return $http.get("/api/user/",username);
        }

        function findAllUsers(){
            return $http.get("/api/user");
        }

        function createUser(user){
            return $http.post("/api/user",user);
        }

        function deleteUserById(userId){
            return $http.delete("/api/user/"+userId);
        }

        function updateUser(userId,user){
            return $http.put("/api/user/"+userId,user);
        }
    }
})();
