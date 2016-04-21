/**
 * Created by bingqinzhou on 3/3/16.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope,$rootScope){

        $scope.logout = logout;

        function logout(){
            $rootScope.currentUser = null;
        }


    }
})();