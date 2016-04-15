/**
 * Created by bingqinzhou on 3/23/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("FieldController",FieldController);

    function FieldController($scope,$rootScope,FieldService,FormService,$routeParams){

        $scope.addField = addField;
        $scope.deleteField = deleteField;
        $scope.popModal = popModal;
        $scope.editField = editField;
        $scope.sort = sort;
        $scope.addOption = addOption;
        $scope.deleteOption = deleteOption;

        var formId = $routeParams.formId;

        initialize(formId);

        function initialize(formId){
            FormService.findFormById(formId).then(navigateCurrentFormToFields);
        }

        function navigateCurrentFormToFields(response){
            $rootScope.currentForm = response.data;
            $rootScope.currentFields = $rootScope.currentForm.fields;
        }

        function updateCurrentFields(formId){
            FieldService.getFieldsForForm(formId)
                .then(setCurrentFields);
        }

        function setCurrentFields(response){
            $rootScope.currentFields = response.data;
        }

        function getNewField(option){
            var newField = null;
            switch(option){
                case "Single Line Text Field":
                    newField = {"id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
                    break;
                case "Multi Line Text Field":
                    newField = {"id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
                    break;
                case "Date Field":
                    newField = {"id": null, "label": "New Date Field", "type": "DATE"};
                    break;
                case "Dropdown Field":
                    newField = {"id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
                        {"label": "Option 1", "value": "OPTION_1"},
                        {"label": "Option 2", "value": "OPTION_2"},
                        {"label": "Option 3", "value": "OPTION_3"}
                    ]};
                    break;
                case "Checkboxes Field":
                    newField = {"id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                        {"label": "Option A", "value": "OPTION_A"},
                        {"label": "Option B", "value": "OPTION_B"},
                        {"label": "Option C", "value": "OPTION_C"}
                    ]};
                    break;
                case "Radiobuttons Field":
                    newField = {"id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
                        {"label": "Option X", "value": "OPTION_X"},
                        {"label": "Option Y", "value": "OPTION_Y"},
                        {"label": "Option Z", "value": "OPTION_Z"}
                    ]};
                    break;
                default: newField = null;
            }
            return newField;
        }

        function addField(option){
            var field = getNewField(option);
            FieldService.createFieldForForm(formId,field);
            updateCurrentFields(formId);
        }

        function deleteField($index){
            var field = $rootScope.currentFields[$index];
            FieldService.deleteFieldFromForm(formId,field._id);
            updateCurrentFields(formId);
        }

        function popModal($index){
            $scope.field = $rootScope.currentFields[$index];
            $('#fieldModal').modal('show');
        }

        function editField(field){
            FieldService.updateField(formId,field._id,field);
            updateCurrentFields(formId);
        }

        function sort(){
            console.log($scope.fields);
        }

        $(function() {
            $( "#sortable" ).sortable({
                start: function(e, ui) {
                    $(this).attr('data-previndex', ui.item.index());
                    ui.item.oldPosition = ui.item.index();
                },
                stop: function(event, ui) {
                    var prevpost={"startIndex":ui.item.oldPosition,"endIndex":ui.item.index()};
                    //updateOrder(prevpost)
                    getNewFields(prevpost);
                }
            }).disableSelection();
        });


        /**
        function updateOrder(prevpost){
            FieldService.updateFieldsOrder(formId,prevpost);
            updateCurrentFields(formId);
        }
         */

        function getNewFields(prevpost){
            FieldService.getNewFields(formId,prevpost).then(updateOrder);
        }

        function updateOrder(response){
            FieldService.updateFieldsOrder(formId,response.data);
        }

        function addOption(field,option){
            field.options.push(option);
        }

        function deleteOption(field,option){
            var index = findIndexOfOption(field,option);
            field.options.splice(index,1);
        }

        function findIndexOfOption(field,option){
            for(var o in field.options){
                if(field.options[o] == option){
                    return o;
                }
            }
            return -1;
        }
    }

})();

