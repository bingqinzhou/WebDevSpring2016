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

        /**
        var recommendations = [
            {"_id": "000", "title": "Recommend A BL Movie!","userId": 123, "movieId": 26371,"username":"alice"},
            {"_id": "010", "title": "Recommend A Great Hongkong Movie", "userId": 123, "movieId":11647,"username":"alice"},
            {"_id": "020", "title": "Recommend A Great Thrilling Movie", "userId": 345, "movieId":9913,"username":"charlie"},
            {"_id": "030", "title": "Recommend A Great Japanese Movie", "userId": 345, "movieId":137936,"username":"charlie"},
            {"_id": "040", "title": "Recommend A Great Chinese Movie", "userId": 567, "movieId":51533,"username":"ed"},
            {"_id": "050", "title": "Recommend Harry Potter", "userId": 567, "movieId":671,"username":"ed"}
        ];
         */

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
            return $http.get("api/project/recommendation");
        }

        function findAllRecommendationsForUser(userId){
            return $http.get("/api/project/user/"+userId+"/recommendation");
        }

        function findRecommendationById(recommendationId){
            return $http.get("/api/project/recommendation/" + recommendationId);
        }


        /**
        function createRecommendation(recommendation){
            recommendation._id = Date.now();
            recommendations.push(recommendation);
            return recommendations;
        }

        function findAllRecommendationsForUser(userId){
            var results = [];
            for(var r in recommendations){
                if(recommendations[r].userId ==  userId){
                    results.push(recommendations[r]);
                }
            }
            return results;
        }



        function findRecommendationById(recommendationId){
            for(var r in recommendations){
                if(recommendations[r]._id == recommendationId){
                    return recommendations[r];
                }
            }
            return null;
        }

        /**
        function deleteRecommendationById(recommendationId){
            var index = -1;
            for(var r in recommendations){
                index++;
                if(recommendations[r]._id == recommendationId){
                    recommendations.splice(index,1);
                    break;
                }
            }
            return recommendations;
        }
         */

        /**
        function updateRecommendationById(recommendationId, recommendation){
            for(var r in recommendations){
                if(recommendations[r]._id == recommendationId){
                    recommendations[r] = recommendation;
                }
            }
            return recommendations;
        }
         */

        /**
        function getAllRecommendations(){
            return recommendations;
        }
         */

    }
})();
