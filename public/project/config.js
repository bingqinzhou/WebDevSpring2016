/**
 * Created by bingqinzhou on 3/3/16.
 */
(function(){
    angular
        .module("MovieApp")
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
            .when("/recommendations",{
                templateUrl:"views/recommendation/recommendation.view.html"
            })
            .when("/search",{
                templateUrl:"views/search/search.view.html",
                controller:"SearchController"
            })
            .when("/detail/:imdbID",{
                templateUrl:"views/search/detail.view.html",
                controller:"DetailController"
            })
            .otherwise({
                redirectTo: "/home"
            });

        ;

    }

})();
