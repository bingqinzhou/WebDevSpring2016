/**
 * Created by bingqinzhou on 4/16/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("PoolController",PoolController);

    function PoolController($scope,RecommendationService){
        $scope.recommendations = RecommendationService.findAllRecommendations();
    }

})();


