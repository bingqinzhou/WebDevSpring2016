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

    function FieldFromDetailController($scope,$rootScope,$location,RecommendationService,FieldService){

        $scope.addField = addField;
        $scope.deleteField = deleteField;
        $scope.addRecommendation = addRecommendation;
        $scope.updateField = updateField;
        $scope.back = back;

        var currentRecommendId = $rootScope.currentRecommendation._id;
        $rootScope.currentFields = $rootScope.currentRecommendation.fields;

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
            $rootScope.currentFields.push(field);
            $rootScope.currentRecommendation.fields = $rootScope.currentFields;
        }

        function deleteField($index){
            var index = 0;
            for(var f in $rootScope.currentFields){
                if(index == $index){
                    $rootScope.currentFields.splice(index,1);
                }
                index++;
            }
            $rootScope.currentRecommendation.fields = $rootScope.currentFields;
        }

        function updateField($index){
            var field = $rootScope.currentFields[$index];
            var index  = 0;
            for(var f in $rootScope.currentFields){
                if(index == $index){
                    $rootScope.currentFields[f] = field;
                }
                index ++;
            }
            $rootScope.currentRecommendation.fields = $rootScope.currentFields;
            alert("Update Content Successfully !");
        }

        function addRecommendation(){
            RecommendationService.createRecommendation($rootScope.currentRecommendation);
            $location.url('/recommendations');
            $rootScope.currentRecommendation = null;
        }

        function back(){
            $location.url('/search');
        }

    }

})();

