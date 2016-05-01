/**
 * Created by bingqinzhou on 4/30/16.
 */

(function(){
    angular
        .module("MovieApp")
        .controller("CommentController",CommentController);

    function CommentController($scope,$rootScope,$routeParams,RecommendationService){

        var recommendationId = $routeParams.recommendationId;
        RecommendationService.findRecommendationById(recommendationId)
            .then(function(response){
                if(response.data){
                    $scope.recommendation = response.data;
                }
            });

        $scope.addComment = addComment;

        function addComment(content){
            var newComment = {"content":content,"userId":$rootScope.currentUser._id,
                              "username":$rootScope.currentUser.username};
            $scope.recommendation.comments.push(newComment);
            RecommendationService.updateRecommendationById(recommendationId,$scope.recommendation);
            updateRecommendation(recommendationId);
            $scope.content = "";
        }

        function updateRecommendation(recommendationId){
            RecommendationService.findRecommendationById(recommendationId)
                .then(function(response){
                    if(response.data){
                        $scope.recommendation = response.data;
                    }
                });
        }

    }

})();


