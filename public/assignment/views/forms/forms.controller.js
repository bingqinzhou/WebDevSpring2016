/**
 * Created by bingqinzhou on 2/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FormController",FormController);

    function FormController($scope,$rootScope,FormService){

        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;

        var currentUser = $rootScope.currentUser;
        var currentUserId = currentUser._id;

        $scope.currentForms = FormService.findAllFormsForUser(currentUserId);
        $scope.currentForm = null;

        function updateCurrentForms(){
            $scope.currentForms = FormService.findAllFormsForUser(currentUserId);
        }

        function addForm(){
            var newForm = {"_id": "000", "title": $scope.formName, "userId": "000"};
            FormService.createFormForUser(currentUserId,newForm);
            $scope.formName = "";
            updateCurrentForms();
        }

        function updateForm(){
            var newForm = {"_id": $scope.currentForm._id, "title": $scope.formName,
                           "userId": currentUserId};

            FormService.updateFormById($scope.currentForm._id, newForm);
            updateCurrentForms();
            $scope.formName = "";
        }

        function selectForm($index){
            $scope.currentForm = $scope.currentForms[$index];
            $scope.formName = $scope.currentForm.title;
        }

        function deleteForm($index){
            var form  = $scope.currentForms[$index];
            FormService.deleteFormById(form._id);
            updateCurrentForms();
            $scope.formName = "";
        }

    }

})();
