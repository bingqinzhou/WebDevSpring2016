/**
 * Created by bingqinzhou on 4/16/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("FieldPoolController",FieldPoolController);

    function FieldPoolController($scope,$routeParams,RecommendationService){

        var recommendationId = $routeParams.recommendationId;
        RecommendationService.findRecommendationById(recommendationId)
            .then(function(response){
                if(response.data){
                    $scope.recommendation = response.data;
                }
            });

    }

})();


