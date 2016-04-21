/**
 * Created by bingqinzhou on 4/20/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("SecurityService",SecurityService);

    function SecurityService($http){

        var services = {
            login:login,
            logout:logout,
            register:register
        }

        return services;

        function login(username, password){
            return $http.post("/api/assignment/login", {username: username, password: password});

        }

        function logout(){
            return $http.post('/api/assignment/logout');
        }

        function register(user){
            return $http.post("/api/assignment/register", user);
        }

    }
})();
