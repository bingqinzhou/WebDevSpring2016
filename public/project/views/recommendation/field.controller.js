/**
 * Created by bingqinzhou on 4/12/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("FieldFromRecommendationController",FieldFromRecommendationController);

    function FieldFromRecommendationController($scope,$rootScope,$routeParams,$location,RecommendationService){

        $scope.addField = addField;
        $scope.deleteField = deleteField;
        $scope.updateRecommendation = updateRecommendation;
        $scope.back = back;

        var currentRecommendId = $routeParams.recommendationId;
        console.log(currentRecommendId);
        $rootScope.currentRecommendation = RecommendationService.findRecommendationById(currentRecommendId);

        function getNewField(option){
            var newField = null;
            switch(option){
                case "Actors":
                    newField = {"label": "Actors:", "type": "TEXT", "value": ""};
                    break;
                case "Directors":
                    newField = {"label": "Directors:", "type": "TEXT", "value": ""};
                    break;
                case "Regions":
                    newField = {"label": "Regions:", "type": "TEXT", "value": ""};
                    break;
                case "Comments":
                    newField = {"label": "Comments:", "type": "TEXTAREA", "value": ""};
                    break;
                default: newField = null;
            }
            return newField;
        }

        function addField(option){
            var field = getNewField(option);
            $rootScope.currentRecommendation.fields.push(field);
        }

        function deleteField($index){
            $rootScope.currentRecommendation.fields.splice($index,1);
        }

        function updateRecommendation(recommendationId,recommendation){
               RecommendationService.updateRecommendationById(recommendationId,recommendation);
               $location.url('/recommendations');
        }

        function back(){
            $location.url('/recommendations');
        }

    }

})();

