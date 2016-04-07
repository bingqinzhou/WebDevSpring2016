/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController",FormController);

    function FormController($scope,$rootScope,$location,FormService){

        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
      //  $scope.navToFields = navToFields;

        var currentUser = $rootScope.currentUser;
        var currentUserId = currentUser._id;

        $rootScope.currentForm = null;
        $rootScope.currentForms = initialize(currentUserId);

        function initialize(userId){
            FormService.findAllFormsForUser(userId).then(updateCurrentForms);
        }

        function updateCurrentForms(response){
            $rootScope.currentForms = response.data;
        }

        function emptyInput(){
            $scope.formName = "";
        }

        function blank(response){
            console.log(response.data);
        }

        function addForm(){
            var newForm = {"title": $scope.formName, "userId": currentUserId};
            FormService.createFormForUser(currentUserId,newForm);
            initialize(currentUserId);
            emptyInput();
        }

        function updateForm(){
            var newForm = {"_id": $rootScope.currentForm._id, "title": $scope.formName,
                "userId": currentUserId};

            FormService.updateFormById($rootScope.currentForm._id, newForm)
                .then(blank);
            initialize(currentUserId);
            emptyInput();
        }

        function selectForm($index){
            $rootScope.currentForm = $rootScope.currentForms[$index];
            $scope.formName = $rootScope.currentForm.title;
        }

        function deleteForm($index){
            var form  = $rootScope.currentForms[$index];
            FormService.deleteFormById(form._id);
            initialize(currentUserId);
            emptyInput();
        }

        /**
        function navToFields($index){
            $rootScope.currentForm = $rootScope.currentForms[$index];
            $rootScope.currentFields = $rootScope.currentForm.fields;
            $location.url('/fields');
        }
        */

    }

})();
