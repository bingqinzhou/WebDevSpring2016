/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController",HeaderController);

    function HeaderController($scope,$rootScope,SecurityService){

        $scope.logout = logout;

        /**
        function logout(){
            $rootScope.currentUser = null;
        }
         */

        function logout(){

            $rootScope.currentUser = null;
            SecurityService.logout();
        }

    }
})();