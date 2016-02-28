/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular.module("movieApp")
           .controller("SearchController", SearchController);

    function SearchController($scope, MovieService){
        $scope.search = search;
        $scope.title = "Star Wars";

        function search(title){
            console.log(title);
            MovieService.findMovieByTitle(title,
                (function(response){
                    console.log(response);
                    $scope.data = response;

                }));

        }

    }


})();
