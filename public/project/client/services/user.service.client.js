(function(){
    angular
        .module("MovieApp")
        .factory("UserService",UserService);

    function UserService($http){

        var services = {

            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById:deleteUserById,
            updateUser:updateUser,
            findUserById:findUserById,
            findUserByUserName:findUserByUserName

        }

        return services;

        function createUser(user){
           return $http.post("/api/user",user);
        }

        function deleteUserById(userId){
            return $http.delete("/api/user/"+userId);
        }

        function updateUser(userId, user){
            return $http.put("/api/user/"+userId,user);
        }

        function findAllUsers(){
            return $http.get("/api/user");
        }

        function findUserById(userId){
            return $http.get("/api/user/"+userId);
        }

        function findUserByUserName(username){
            return $http.get("/api/user/",username);
        }

        function findUserByCredentials(username,password){
            return $http.get("/api/userCred/" + username + "/" + password);
        }

    }
})();
