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

    function RecommendationService($rootScope){

        var recommendations = [
            {"_id": "000", "title": "Recommend A BL Movie!", "userId": 123, "movieId": 26371},
            {"_id": "010", "title": "Recommend A Great Hongkong Movie", "userId": 123, "movieId":11647},
            {"_id": "020", "title": "Recommend Harry Potter", "userId": 234, "movieId":671}
        ]

        var services = {

            createRecommendationForUser:createRecommendationForUser,
            findAllRecommendationsForUser:findAllRecommendationsForUser,
            deleteRecommendationById:deleteRecommendationById,
            updateRecommendationById:updateRecommendationById,
            findRecommendationById:findRecommendationById

        }

        return services;

        /**
        function createFormForUser(userId,form){
            console.log("hello from client");
            return $http.post("/api/assignment/user/"+userId+"/form",form);
        }
         */

        function createRecommendationForUser(recommendation){
            recommendation._id = Date.now();
            recommendations.push(recommendation);
            return recommendations;
        }

        /**
        function findAllRecommendationsForUser(userId){
            return $http.get("/api/assignment/user/"+userId+"/form");
        }
         */

        function findAllRecommendationsForUser(userId){
            var results = [];
            for(var r in recommendations){
                if(recommendations[r].userId ==  userId){
                    results.push(recommendations[r]);
                }
            }
            return results;
        }

        /**
        function findFormById(formId){
            return $http.get("/api/assignment/form/" + formId);
        }
         */

        function findRecommendationById(recommendationId){
            for(var r in recommendations){
                if(recommendations[r]._id == recommendationId){
                    return recommendations[r];
                }
            }
            return null;
        }

        /**
        function deleteRecommendationById(formId,callback){
            return $http.delete("/api/assignment/form/"+formId);
        }
         */

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

        /**
        function updateFormById(formId, newForm){
            return $http.put("/api/assignment/form/"+formId,newForm);
        }
         */

        function updateRecommendationById(recommendationId, recommendation){
            for(var r in recommendations){
                if(recommendations[r]._id == recommendationId){
                    recommendations[r] = recommendation;
                }
            }
            return recommendations;
        }

    }
})();
