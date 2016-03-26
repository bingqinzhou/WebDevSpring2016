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

        }

        return services;

        function findUserByUserName(username,callback){
            return $http.get("/api/assignment/user/",username);
        }

        function findUserByCredentials(credential){
            return $http.get("/api/assignment/userCred/" + credential.username + "/" + credential.password);
        }

        function findAllUsers(callback){
            return $http.get("/api/assignment/user");
        }

        function createUser(user){
            return $http.post("/api/assignment/user",user);
        }

        function deleteUserById(userId,callback){
            return $http.delete("/api/assignment/user/"+userId);
        }

        function updateUser(userId,user){
            return $http.put("/api/assignment/user/"+userId,user);
        }
    }
})();
