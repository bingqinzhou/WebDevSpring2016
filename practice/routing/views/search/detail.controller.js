/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
           .module("movieApp")
           .controller("DetailController", DetailController);

    function DetailController($scope,$routeParams,MovieService){
        $scope.imdbID = $routeParams.imdbID;

        MovieService.findMovieByImdbID($scope.imdbID,
            (function(response){
                $scope.movie = response;

            })
        );


    }

})();
