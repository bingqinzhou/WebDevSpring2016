/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController",MainController);

    function MainController($scope,$location,$rootScope){
        $scope.$location = $location;
        $rootScope.currentUser = null;
        $rootScope.currentForms = null;
        $rootScope.currentForm = null;
        $rootScope.currentFields = null;
    }

})();
