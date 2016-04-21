/**
 * Created by bingqinzhou on 3/3/16.
 */

(function(){
    angular
        .module("MovieApp")
        .controller("HomeController",HomeController);

    function HomeController($scope, MovieService){

        MovieService.getMostPopularMovies(setPopularMovies);

        function setPopularMovies(response){
            $scope.popularMovies = response.data;
        }
    }


})();


