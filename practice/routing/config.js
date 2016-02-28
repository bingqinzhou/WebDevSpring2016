/**
 * Created by bingqinzhou on 2/23/16.
 */
(function() {

    angular
        .module("movieApp") /*no dependencies on low levels*/
        .config(Configuration);

    function Configuration($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"views/home/home.view.html",
                controller: "HomeController"

            })
            .when("/search",{
                templateUrl:"views/search/search.view.html",
                controller: "SearchController"
            })
            .when("/detail/:imdbID",{
                templateUrl:"views/search/detail.view.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: "/home"
            });

    }

})();
