/**
 * Created by bingqinzhou on 3/3/16.
 */
(function(){
    angular
        .module("MovieApp")
        .config(Configuration);

    function Configuration($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"views/home/home.view.html",
                controller:"HomeController"
            })
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
            .when("/profile/:userId",{
                templateUrl:"views/pool/profile.view.html",
                controller:"ProfilePoolController",
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
            .when("/recommendations",{
                templateUrl:"views/recommendation/recommendation.view.html",
                controller:"RecommendationController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/recommendation/:recommendationId",{
                templateUrl:"views/recommendation/field.view.html",
                controller:"FieldFromRecommendationController"
            })
            .when("/pool/:recommendationId",{
                templateUrl:"views/pool/field.view.html",
                controller:"FieldPoolController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/comments/:recommendationId",{
                templateUrl:"views/pool/comments.view.html",
                controller:"CommentController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/recommendations/:userId",{
                templateUrl:"views/pool/recommendations.view.html",
                controller:"RecommendationPoolController"
            })
            .when("/field",{
                templateUrl:"views/search/field.view.html",
                controller:"FieldFromDetailController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/search",{
                templateUrl:"views/search/search.view.html",
                controller:"SearchController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/detail/:movieId",{
                templateUrl:"views/search/detail.view.html",
                controller:"DetailController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .when("/pool",{
                templateUrl:"views/pool/pool.view.html",
                controller:"PoolController",
                resolve: {
                    checkLoggedIn : checkLoggedIn
                }
            })
            .otherwise({
                redirectTo: "/home"
            });


        function checkLoggedIn($rootScope, $http, $q, $location) {

            var deferred = $q.defer();

            $http.get("/api/loggedin").success(function(user)
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
