/**
 * Created by bingqinzhou on 3/6/16.
 */
(function(){
    angular.module("MovieApp")
        .factory("MovieService",movieService);

    function movieService($http){

        var api = {
            search:search,
            findMovieById:findMovieById
        }
        return api;

        function search(content,callback){
            $http.get("https://api.themoviedb.org/3/search/movie?query="+content+"&api_key=fe692dd613a23df147d8a3820dae9e36")
                .success(callback);
        }

        function findMovieById(movieId,callback){
            $http.get("https://api.themoviedb.org/3/movie/"+movieId+"?api_key=fe692dd613a23df147d8a3820dae9e36")
                .success(callback);
        }


    }

})();