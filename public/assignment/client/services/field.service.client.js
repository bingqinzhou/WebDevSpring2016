/**
 * Created by bingqinzhou on 3/15/16.
 */

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($http){

        var services = {
            createFieldForForm:createFieldForForm,
            getFieldsForForm:getFieldsForForm,
            getFieldForForm:getFieldForForm,
            deleteFieldFromForm:deleteFieldFromForm,
            updateField:updateField,
            updateFieldsOrder:updateFieldsOrder

        }

        return services;

        function createFieldForForm(formId,field){
           return $http.post("/api/assignment/form/"+formId+"/field",field);
        }

        function getFieldsForForm(formId){
            return $http.get("/api/assignment/form/" + formId + "/field");
        }

        function getFieldForForm(formId,fieldId){
            return $http.delete("/api/assignment/form/"+formId+"/field/"+fieldId);
        }

        function deleteFieldFromForm(formId,fieldId){
            return $http.delete("/api/assignment/form/"+formId+"/field/"+fieldId);
        }

        function updateField(formId,fieldId,field){
            return $http.put("/api/assignment/form/"+formId+"/field/"+fieldId,field);
        }


        function updateFieldsOrder(formId,startIndex,endIndex){
            //return $http.put("/api/assignment/form/"+formId,prevpost);
        }

    }
})();
