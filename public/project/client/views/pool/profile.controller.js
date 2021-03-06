/**
 * Created by bingqinzhou on 4/16/16.
 */
(function(){

    angular
        .module("MovieApp")
        .controller("ProfilePoolController",ProfilePoolController);

    function ProfilePoolController($scope,$routeParams,UserService){
        var userId = $routeParams.userId;
        UserService.findUserById(userId)
            .then(function(response){
                if(response.data){
                    $scope.user = response.data;
                }
            });
    }

})();
