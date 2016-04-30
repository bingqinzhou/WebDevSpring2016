/**
 * Created by bingqinzhou on 4/12/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("FieldFromRecommendationController",FieldFromRecommendationController);

    function FieldFromRecommendationController($scope,$rootScope,$routeParams,$location,RecommendationService,FieldService){

        $scope.addField = addField;
        $scope.deleteField = deleteField;
        $scope.updateField = updateField;
        $scope.updateRecommendation = updateRecommendation;
        $scope.back = back;
        $scope.setRating = setRating;

        var currentRecommendId = $routeParams.recommendationId;

        RecommendationService.findRecommendationById(currentRecommendId)
            .then(function(response){
                if(response.data){
                    $rootScope.currentRecommendation = response.data;
                    $rootScope.currentFields = $rootScope.currentRecommendation.fields;
                    $scope.rating = $rootScope.currentRecommendation.rating;
                }
            });

        function updateCurrentFields(recommendationId){
            FieldService.findAllFieldsForRecommendation(recommendationId)
                .then(function(response){
                    if(response.data){
                        $rootScope.currentFields = response.data;
                    }
                });
        }

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
            FieldService.createFieldForRecommendation($rootScope.currentRecommendation._id,field);
            updateCurrentFields($rootScope.currentRecommendation._id);

        }

        function deleteField($index){
            var field = $rootScope.currentFields[$index];
            FieldService.deleteFieldByLabel($rootScope.currentRecommendation._id,field.label);
            updateCurrentFields($rootScope.currentRecommendation._id);
        }

        function updateField($index){
            var field = $rootScope.currentFields[$index];
            console.log(field);
            FieldService.updateFieldForRecommendation($rootScope.currentRecommendation._id,field.label,field);
            alert("Update Content Successfully !");
        }

        function updateRecommendation(recommendationId,recommendation){
               RecommendationService.updateRecommendationById(recommendationId,recommendation);
               $location.url('/recommendations');
               $rootScope.currentRecommendation = null;
        }

        function back(){
            $location.url('/recommendations');
            $rootScope.currentRecommendation = null;
        }

        function setRating(){
            $rootScope.currentRecommendation.rating = $scope.rating;
            RecommendationService.updateRecommendationById(currentRecommendId,$rootScope.currentRecommendation);
        }

    }

})();

