/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
        .module("movieApp")
        .controller("NavController", NavController);

    function NavController($scope,$location){
        $scope.$location = $location;

    }

})();
