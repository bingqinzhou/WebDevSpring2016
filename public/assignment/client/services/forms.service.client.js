/**
 * Created by bingqinzhou on 2/25/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService);

    function FormService($http){

        var services = {

            createFormForUser:createFormForUser,
            findAllFormsForUser:findAllFormsForUser,
            deleteFormById:deleteFormById,
            updateFormById:updateFormById

        }

        return services;

        function createFormForUser(userId,form){
            return $http.post("/api/assignment/user/"+userId+"/form",form);
        }

        function findAllFormsForUser(userId){
            return $http.get("/api/assignment/user/"+userId+"/form");
        }

        function deleteFormById(formId,callback){
            return $http.delete("/api/assignment/form/"+formId);
        }

        function updateFormById(formId, newForm){
            return $http.put("/api/assignment/form/"+formId,newForm);
        }
    }


})();