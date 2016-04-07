/**
 * Created by bingqinzhou on 3/12/16.
 */

var q = require("q");

module.exports = function(db,mongoose,FormCollection){

    //var FormSchema = require("./form.schema.server.js")(mongoose);
    //var FormModel = mongoose.model("FormModel",FormSchema);

    var api = {
        createFormForUser:createFormForUser,
        updateFormById:updateFormById,
        deleteFormById:deleteFormById,
        findAllForms:findAllForms,
        findFormById:findFormById,
        findFormByTitle:findFormByTitle,
        findAllFormsForUser:findAllFormsForUser
    }
    return api;

    function createFormForUser(userId, form){
        var deferred = q.defer();
        var formId = mongoose.Types.ObjectId();
        form.userId = userId;
        form._id = formId;
        FormCollection.create(form,function(err,doc){
            if (err) {
                console.log(err);
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function updateFormById(formId,form){
        var deferred = q.defer();
        FormCollection.update({_id:mongoose.Types.ObjectId(formId)},
            {$set:{title:form.title,userId:form.userId,fields:form.fields}},
            function (err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    };

    function deleteFormById(formId){
        var deferred = q.defer();
        FormCollection.remove({_id:mongoose.Types.ObjectId(formId)}, function (err, doc) {
            if (err) {
                console.log(err);
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findAllForms(){
        var deferred = q.defer();
        FormCollection.find(function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findFormById(formId){
        var deferred = q.defer();
        FormCollection.findOne({_id:formId}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findFormByTitle(title){
        var deferred = q.defer();
        FormCollection.find({title:title}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findAllFormsForUser(userId){
        var deferred = q.defer();
        FormCollection.find({userId:userId},function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

};
