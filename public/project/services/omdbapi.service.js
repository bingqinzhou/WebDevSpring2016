/**
 * Created by bingqinzhou on 3/6/16.
 */
(function(){
    angular.module("MovieApp")
        .factory("MovieService",movieService);

    function movieService($http){

        var api = {
            search:search,
            findMovieByImdbID:findMovieByImdbID
        }
        return api;

        function search(content,callback) {
            $http.get("http://www.omdbapi.com/?s="+content)
                .success(callback);
        }

        function findMovieByImdbID(imdbID, callback){
            $http.get("http://www.omdbapi.com/?i="+imdbID)
                .success(callback);
        }


    }

})();