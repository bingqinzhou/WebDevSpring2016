/**
 * Created by bingqinzhou on 3/12/16.
 */

var mock = require("./form.mock.json");

module.exports = function(app){

    var api = {

        createFormForUser:createFormForUser,
        findAllForms:findAllForms,
        updateFormById:updateFormById,
        deleteFormById:deleteFormById,
        findFormById:findFormById,
        findFormByTitle:findFormByTitle,
        findAllFormsForUser:findAllFormsForUser,
        findAllFieldsForForm:findAllFieldsForForm,
        findFieldById:findFieldById,
        findFieldByIdForForm:findFieldByIdForForm,
        deleteFieldById:deleteFieldById,
        deleteFieldByIdForForm:deleteFieldByIdForForm,
        createFieldForForm:createFieldForForm,
        updateFieldForForm:updateFieldForForm

    }

    return api;

    function createFormForUser(userId, form){
        var newId = (new Date).getTime();
        form._id = newId;
        form.userId = userId;
        mock.push(form);
        return form;
    }


    function findAllForms(){
        return mock;
    };

    function updateFormById(formId,form){
        for(var f in mock){
            if(mock[f]._id == formId){
                mock[f] = form;
                break;
            }
        }
        return form;
    };

    function deleteFormById(formId){
        var index = -1;
        for(var f in mock){
            index++;
            if(mock[f]._id == formId){
                var form = mock[f];
                mock.splice(index,1);
                return form;
            }
        }
        return null;
    };

    function findFormById(formId){
        for(var f in mock) {
            if( mock[f]._id === formId ) {
                return mock[f];
            }
        }
        return null;
    };

    function findFormByTitle(title){
        for(var f in mock) {
            if( mock[f].title === title ) {
                return mock[f];
            }
        }
        return null;
    };

    function findAllFormsForUser(userId){
        var resultForms = [];
        for(var f in mock){
            if(mock[f].userId == userId){
                resultForms.push(mock[f]);
            }
        }
        return resultForms;
    }

    function findAllFieldsForForm(formId){
        var form = findFormById(formId);
        var resultFields = form.fields;
        return resultFields;
    }

    function findFieldById(fields, fieldId){
        for(var f in fields){
            if(fields[f]._id == fieldId){
                return fields[f];
            }
        }
        return null;
    }

    function findFieldByIdForForm(formId, fieldId){
        var fields = findAllFieldsForForm(formId);
        var field = findFieldById(fields,fieldId);
        return field;
    }

    function deleteFieldById(fields,fieldId){
        var index = -1;
        for(var f in fields){
            index++;
            if(fields[f]._id == fieldId){
                fields.splice(index,1);
                break;
            }
        }
        return fields;
    }

    function deleteFieldByIdForForm(formId,fieldId){
        var fields = findAllFieldsForForm(formId);
        var newFields = deleteFieldById(fields,fieldId);
        return newFields;
    }

    function createFieldForForm(formId,field){
        var fields = findAllFieldsForForm(formId);
        var newId = (new Date).getTime();
        field._id = newId;
        fields.push(field);
        return fields;
    }

    function updateFieldForForm(formId,fieldId,field){
        var fields = findAllFieldsForForm(formId);
        for(var f in fields){
            if(fields[f]._id == fieldId){
                fields[f] = field;
                break;
            }
        }
        return fields;
    }

};
