/**
 * Created by bingqinzhou on 3/5/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("SearchController",SearchController);

    function SearchController($scope, MovieService){

        $scope.search = search;

        function search(content) {
            MovieService.search(
                content,
                function(response){
                    $scope.data = response.results;
            });
        }


    }
})();
