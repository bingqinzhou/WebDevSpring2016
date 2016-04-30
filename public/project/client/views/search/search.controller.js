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
                    console.log(response.results);
                    if(response.results.length == 0){
                        alert("No Search Results Found !");
                    }else{
                        $scope.data = response.results;
                    }
            });
        }


    }
})();
