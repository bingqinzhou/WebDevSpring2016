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

        $rootScope.currentRecommendation = null;
        $rootScope.currentRecommendations = initialize(currentUserId);

        function initialize(userId){
            RecommendationService.findAllRecommendationsForUser(userId)
                .then(updateCurrentRecommendations);
        }

        function updateCurrentRecommendations(response){
            $rootScope.currentRecommendations = response.data;
        }

        function blank(response){
            console.log(response.data);
        }

        function emptyInput(){
            $scope.title = "";
        }

        function updateTitle(title){
            $rootScope.currentRecommendation.title = title;
            var recommendationId = $rootScope.currentRecommendation._id;
            var newRecommendation = $rootScope.currentRecommendation;
            console.log(newRecommendation);
            RecommendationService.updateRecommendationById(recommendationId,newRecommendation);
            initialize(currentUserId);
            emptyInput();
        }

        function selectRecommendation($index){
            $rootScope.currentRecommendation = $scope.currentRecommendations[$index];
            $scope.title = $scope.currentRecommendation.title;
        }

        function deleteRecommendation($index){
            var recommendation  = $rootScope.currentRecommendations[$index];
            RecommendationService.deleteRecommendationById(recommendation._id);
            initialize(currentUserId);
            emptyInput();
        }
    }

})();

