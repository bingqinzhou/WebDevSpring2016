/**
 * Created by bingqinzhou on 4/27/16.
 */

(function(){
    angular
        .module("MovieApp")
        .factory("SecurityService",SecurityService);

    function SecurityService($http){

        var services = {
            login:login,
            logout:logout,
            register:register
        }

        return services;

        function login(username, password){
            return $http.post("/api/login", {username: username, password: password});

        }

        function logout(){
            return $http.post('/api/logout');
        }

        function register(user){
            return $http.post("/api/register", user);
        }

    }
})();
