/**
 * Created by bingqinzhou on 3/3/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("MainController",MainController);

    function MainController($scope,$location,$rootScope){
        $scope.$location = $location;
        $rootScope.currentUser = null;
        $rootScope.currentMovie = null;
        $rootScope.currentRecommendation = null;
        $rootScope.currentRecommendations = null;
    }

})();
