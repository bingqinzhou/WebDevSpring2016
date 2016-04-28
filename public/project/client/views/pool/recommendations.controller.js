/**
 * Created by bingqinzhou on 4/20/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("RecommendationPoolController",RecommendationPoolController);

    function RecommendationPoolController($scope,$routeParams,RecommendationService,UserService){

        var userId = $routeParams.userId;

        function initializeRecommendations(userId){
            RecommendationService.findAllRecommendationsForUser(userId)
                .then(updateRecommendations);
        }

        function initializeUser(userId){
            UserService.findUserById(userId)
                .then(updateUser);
        }

        function updateRecommendations(response){
            if(response.data){
                $scope.recommendations = response.data;
            }
            console.log("response data is null");
        }

        function updateUser(response){
            $scope.user = response.data;
            console.log("response data is null");
        }

        initializeRecommendations(userId);
        initializeUser(userId);
    }

})();
