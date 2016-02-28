/**
 * Created by bingqinzhou on 2/25/16.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService);

    function FormService(){

        var forms =

            [
                {"_id": "000", "title": "Contacts", "userId": 123},
                {"_id": "010", "title": "ToDo",     "userId": 123},
                {"_id": "020", "title": "CDs",      "userId": 234},
            ]

        var services = {

            createFormForUser:createFormForUser,
            findAllFormsForUser:findAllFormsForUser,
            deleteFormById:deleteFormById,
            updateFormById:updateFormById

        }

        return services;

        function createFormForUser(userId, form){

            var newId = (new Date).getTime();
            form._id = newId;
            form.userId = userId;
            forms.push(form);
            return form;

        }

        function findAllFormsForUser(userId){
            var resultForms = [];
            for(var f in forms){
                if(forms[f].userId === userId){
                    resultForms.push(forms[f]);
                }
            }
            return resultForms;
        }

        function deleteFormById(formId){
            var index = -1;
            for(var f in forms){
                index++;
                if(forms[f]._id === formId){
                    forms.splice(index,1);
                    break;
                }

            }
            return forms;
        }

        function updateFormById(formId, newForm){
            for(var f in forms){
                if(forms[f]._id === formId){
                    forms[f] = newForm;
                    break;
                }
            }
            return newForm;
        }
    }


})();