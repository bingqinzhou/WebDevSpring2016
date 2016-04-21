/**
 * Created by bingqinzhou on 3/6/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("DetailController",DetailController);

    function DetailController($scope, $rootScope,$routeParams,MovieService){

        $scope.movieId = $routeParams.movieId;
        $scope.createRecommendation = createRecommendation;

        MovieService.findMovieById($scope.movieId,
            function(response){
                $rootScope.currentMovie = response;
            })

        function createRecommendation(movie){
            $rootScope.currentRecommendation =
            {"title": "Recommend "+ movie.title,
                "userId": $rootScope.currentUser._id, "movieId": movie.id,"username":$rootScope.currentUser.username,
                "fields": [
                    {"label": "Title:", "type":"TEXT","value":movie.title},
                    {"label": "Original Title:", "type":"TEXT","value":movie.original_title},
                    {"label": "Release Date:", "type":"TEXT","value":movie.release_date},
                    {"label": "Language:", "type":"TEXT","value":movie.original_language},
                    {"label": "Overview:", "type":"TEXTAREA","value":movie.overview}
                ]
            }
        }

    }
})();
