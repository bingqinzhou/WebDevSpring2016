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
                controller:"ProfileController"
            })
            .when("/admin",{
                templateUrl:"views/admin/admin.view.html"
            })
            .when("/home",{
                templateUrl:"views/home/home.view.html"
            })
            .when("/forms",{
                templateUrl:"views/forms/forms.view.html",
                controller:"FormController"
            })
            .otherwise({
                redirectTo: "/home"
            });

        ;

    }

})();
