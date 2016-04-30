/**
 * Created by bingqinzhou on 4/13/16.
 */
/**
 * Created by bingqinzhou on 2/25/16.
 */
(function(){
    angular
        .module("MovieApp")
        .factory("RecommendationService",RecommendationService);

    function RecommendationService($http){

        var services = {

            createRecommendation:createRecommendation,
            findAllRecommendationsForUser:findAllRecommendationsForUser,
            deleteRecommendationById:deleteRecommendationById,
            updateRecommendationById:updateRecommendationById,
            findRecommendationById:findRecommendationById,
            findAllRecommendations:findAllRecommendations

        }

        return services;


        function createRecommendation(recommendation){
            return $http.post("/api/project/recommendation",recommendation);
        }


        function deleteRecommendationById(recommendationId){
            return $http.delete("/api/project/recommendation/"+recommendationId);
        }

        function updateRecommendationById(recommendationId, recommendation){
            return $http.put("/api/project/recommendation/"+recommendationId,recommendation);
        }

        function findAllRecommendations(){
            return $http.get("/api/project/recommendation");
        }

        function findAllRecommendationsForUser(userId){
            return $http.get("/api/project/user/"+userId+"/recommendation");
        }

        function findRecommendationById(recommendationId){
            return $http.get("/api/project/recommendation/" + recommendationId);
        }
    }
})();
