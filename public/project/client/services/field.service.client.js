/**
 * Created by bingqinzhou on 4/21/16.
 */
(function() {
    angular
        .module("MovieApp")
        .factory("FieldService", FieldService);

    function FieldService($http){

        var services = {
            createFieldForRecommendation:createFieldForRecommendation,
            findAllFieldsForRecommendation:findAllFieldsForRecommendation,
            deleteFieldByLabel:deleteFieldByLabel,
            updateFieldForRecommendation:updateFieldForRecommendation
        }

        return services;

        function createFieldForRecommendation(recommendationId,field){
            return $http.post("/api/project/recommendation/"+recommendationId+"/field",field);
        }

        function findAllFieldsForRecommendation(recommendationId){
            return $http.get("/api/project/recommendation/" + recommendationId + "/field");
        }

        function deleteFieldByLabel(recommendationId,fieldLabel){
            return $http.delete("/api/project/recommendation/"+recommendationId+"/field/"+fieldLabel);
        }

        function updateFieldForRecommendation(recommendationId,fieldLabel,field){
            return $http.put("/api/project/recommendation/"+recommendationId+"/field/"+fieldLabel,field);
        }

    }
})();

