/**
 * Created by bingqinzhou on 4/16/16.
 */
(function(){

    angular
        .module("MovieApp")
        .controller("ProfilePoolController",ProfilePoolController);

    function ProfilePoolController($scope,$routeParams,UserService){
        var userId = $routeParams.userId;
        $scope.user = UserService.findUserById(userId);
    }

})();
