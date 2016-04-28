/**
 * Created by bingqinzhou on 4/16/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("PoolController",PoolController);

    function PoolController($scope,RecommendationService){

        RecommendationService.findAllRecommendations()
            .then(function(response){
                if(response.data){
                    $scope.recommendations = response.data;
                }else{
                    console.log("no response");
                }
            });
    }

})();


