(function(){
    angular
        .module("MovieApp")
        .factory("UserService",UserService);

    function UserService($http){

        /**
        var users =

            [
                {"_id":123, "firstName":"Alice",    "lastName":"Wonderland", "username":"alice",
                            "password":"alice",     "roles": "user"                      },
                {"_id":234, "firstName":"Bob",      "lastName":"Hope",       "username":"bob",
                            "password":"bob",       "roles": "admin"                       },
                {"_id":345, "firstName":"Charlie",  "lastName":"Brown",      "username":"charlie",
                            "password":"charlie",   "roles": "user"                      },
                {"_id":456, "firstName":"Dan",      "lastName":"Craig",      "username":"dan",
                            "password":"dan",       "roles": "admin"             },
                {"_id":567, "firstName":"Edward",   "lastName":"Norton",     "username":"ed",
                            "password":"ed",        "roles": "user"                      }
            ]
         */

        var services = {

            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById:deleteUserById,
            updateUser:updateUser,
            findUserById:findUserById

        }

        return services;

        function createUser(user){
           return $http.post("/api/project/user",user);
        }

        function deleteUserById(userId){
            return $http.delete("/api/project/user/"+userId);
        }

        function updateUser(userId, user){
            return $http.put("/api/project/user/"+userId,user);
        }

        function findAllUsers(){
            return $http.get("/api/project/user");
        }

        function findUserById(userId){
            return $http.get("/api/project/user/"+userId);
        }

        function findUserByCredentials(username,password){
            return $http.get("/api/assignment/userCred/" + credential.username + "/" + credential.password);
        }

        /**
        function findUserByCredentials(username,password){
              for(var u in users){
                  if(users[u].username == username && users[u].password == password){
                     return users[u];
                  }
              }
              return null;
        }

        function findAllUsers(){
            return users;
        }
         */

        /**
        function createUser(user){
            var newId = (new Date).getTime();
            user._id = newId;
            users.push(user);
            return user;

        }

        function deleteUserById(userId){
            var index = -1;
            for(var u in users){
               index++;
                if(users[u]._id == userId){
                    users.splice(index,1);
                    break;
                }
            }
            return users;
        }

        function updateUser(userId, user){
            for(var u in users){
                if(users[u]._id == userId){
                    users[u] = user;
                    break;
                }
            }
            return user;
        }


        function getUserById(userId){
            for(var u in users){
                if(users[u]._id == userId){
                    return users[u];
                }
            }
            return null;
        }
         */

    }
})();
