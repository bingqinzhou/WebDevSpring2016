/**
 * Created by bingqinzhou on 3/31/16.
 */

var q = require("q");

module.exports = function(db,mongoose,FormCollection){

    //var FieldSchema = require("./field.schema.server.js")(mongoose);
    //var FieldModel = mongoose.model("FieldModel",FieldSchema);

    var api = {
        findAllFieldsForForm:findAllFieldsForForm,
        findFieldByIdForForm:findFieldByIdForForm,
        deleteFieldByIdForForm:deleteFieldByIdForForm,
        createFieldForForm:createFieldForForm,
        updateFieldForForm:updateFieldForForm,
        updateFieldsOrder:updateFieldsOrder,
        getNewFields:getNewFields
    }

    return api;

    function findAllFieldsForForm(formId){
        var deferred = q.defer();
        FormCollection.findById(formId, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc.fields);
            }
        });
        return deferred.promise;
    }

    function findFieldByIdForForm(formId, fieldId){
        var deferred = q.defer();
        FormCollection.findById(formId, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                for(var f in doc.fields){
                    if(doc.fields[f]._id == fieldId){
                        deferred.resolve(doc.fields[f]);
                    }
                }
            }
        });
        return deferred.promise;
    }

    function createFieldForForm(formId,field){
        var deferred = q.defer();
        var fieldId = mongoose.Types.ObjectId();
        field._id = fieldId;
        FormCollection.findByIdAndUpdate(formId,{$push:{"fields":field}},function(err, doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function updateFieldForForm(formId,fieldId,field){
        var deferred = q.defer();
        var fieldId = mongoose.Types.ObjectId();
        FormCollection.update({_id:formId,"fields._id":field._id},{$set:{"fields.$":field}},
            function(err, doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function deleteFieldByIdForForm(formId,fieldId){
        var deferred = q.defer();
        FormCollection.findByIdAndUpdate(formId,{$pull:{"fields":{_id:fieldId}}},
            function(err, doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    /**
    function updateFieldsOrder(formId,startIndex,endIndex){

        var deferred = q.defer();

        var newFields = makeNewFields(formId,startIndex,endIndex);

        FormCollection.update({_id:formId},{$set:{"fields":newFields}},
            function(err, doc){
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
    }
     */

    function getNewFields(formId,startIndex,endIndex){
        var deferred = q.defer();
        FormCollection.findById(formId, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                var field = doc.fields[startIndex];
                doc.fields.splice(startIndex,1);
                doc.fields.splice(endIndex,0,field);
                deferred.resolve(doc.fields);
            }
        });
        return deferred.promise;
    }

    function updateFieldsOrder(formId,newFields){

        var deferred = q.defer();
        FormCollection.update({_id:formId},{$set:{"fields":newFields}},
            function(err, doc){
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });

        return deferred.promise;

    }

}