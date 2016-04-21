/**
 * Created by bingqinzhou on 4/20/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("RecommendationPoolController",RecommendationPoolController);

    function RecommendationPoolController($scope,$routeParams,RecommendationService,UserService){

        var userId = $routeParams.userId;

        $scope.recommendations = RecommendationService.findAllRecommendationsForUser(userId);
        $scope.user = UserService.findUserById(userId);

    }

})();
