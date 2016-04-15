/**
 * Created by bingqinzhou on 4/14/16.
 */
/**
 * Created by bingqinzhou on 4/12/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("FieldFromDetailController",FieldFromDetailController);

    function FieldFromDetailController($scope,$rootScope,$location,RecommendationService){

        $scope.addField = addField;
        $scope.deleteField = deleteField;
        $scope.addRecommendation = addRecommendation;
        $scope.back = back;

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

        function addRecommendation(recommendation){
            var recommendations = RecommendationService.createRecommendationForUser(recommendation);
            $location.url('/recommendations');
            $rootScope.currentRecommendation = null;
        }

        function back(){
            $location.url('/search');
        }

    }

})();

