/**
 * Created by bingqinzhou on 3/6/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("DetailController",DetailController);

    function DetailController($scope, $routeParams,MovieService){

        $scope.imdbID = $routeParams.imdbID;

        MovieService.findMovieByImdbID($scope.imdbID,
               function(response){
                      $scope.movie = response;
               })


    }
})();
