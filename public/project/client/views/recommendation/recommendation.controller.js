/**
 * Created by bingqinzhou on 3/5/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("RecommendationController",RecommendationController);

    function RecommendationController($scope,$rootScope,RecommendationService){

        $scope.updateTitle = updateTitle;
        $scope.deleteRecommendation = deleteRecommendation;
        $scope.selectRecommendation = selectRecommendation;

        var currentUser = $rootScope.currentUser;
        var currentUserId = currentUser._id;

        $rootScope.currentRecommendations = RecommendationService.findAllRecommendationsForUser(currentUserId);
        $rootScope.currentRecommendation = null;

        function updateCurrentRecommendations(){
            $rootScope.currentRecommendations = RecommendationService.findAllRecommendationsForUser(currentUserId);
        }

        function updateTitle(title){
            $rootScope.currentRecommendation.title = title;
            var recommendationId = $rootScope.currentRecommendation._id;
            var newRecommendation = $rootScope.currentRecommendation;
            RecommendationService.updateRecommendationById(recommendationId,newRecommendation);
            updateCurrentRecommendations();
            $scope.title = "";
        }

        function selectRecommendation($index){
            $rootScope.currentRecommendation = $scope.currentRecommendations[$index];
            $scope.title = $scope.currentRecommendation.title;
        }

        function deleteRecommendation($index){
            var recommendation  = $rootScope.currentRecommendations[$index];
            RecommendationService.deleteRecommendationById(recommendation._id);
            updateCurrentRecommendations();
            $scope.title = "";
        }
    }

})();

