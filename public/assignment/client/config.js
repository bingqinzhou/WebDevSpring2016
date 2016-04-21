/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
           .module("FormBuilderApp")
           .config(Configuration);

    function Configuration($routeProvider){
        $routeProvider
            .when("/register",{
                templateUrl:"views/users/register.view.html",
                controller:"RegisterController"
            })
            .when("/login",{
                templateUrl:"views/users/login.view.html",
                controller:"LoginController"
            })
            .when("/profile",{
                templateUrl:"views/users/profile.view.html",
                controller:"ProfileController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/admin",{
                templateUrl:"views/admin/admin.view.html",
                controller:"AdminController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/home",{
                templateUrl:"views/home/home.view.html"
            })
            .when("/forms",{
                templateUrl:"views/forms/forms.view.html",
                controller:"FormController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/fields",{
                templateUrl:"views/forms/fields.view.html",
                controller:"FieldController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/form/:formId/fields", {
                templateUrl: "views/forms/fields.view.html",
                controller: "FieldController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .otherwise({
                redirectTo: "/home"
            });

        function checkLoggedIn($rootScope, $http, $q, $location) {

            var deferred = $q.defer();

            $http.get("/api/assignment/loggedin").success(function(user)
            {
                if (user !== '0') {
                    console.log(user);
                    $rootScope.currentUser = user;
                    deferred.resolve();
                }
                else {
                    deferred.reject();
                    $location.url("/home")
                }
            });
            return deferred.promise;
        }

    }


})();
