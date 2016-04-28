/**
 * Created by bingqinzhou on 4/20/16.
 */

var q = require("q");

module.exports = function(db,mongoose,RecommendationCollection){

    var api = {
        findAllFieldsForRecommendation:findAllFieldsForRecommendation,
        deleteFieldByLabel:deleteFieldByLabel,
        createFieldForRecommendation:createFieldForRecommendation,
        updateFieldForRecommendation:updateFieldForRecommendation
    }

    return api;

    function findAllFieldsForRecommendation(recommendationId){
        var deferred = q.defer();
        RecommendationCollection.findById(recommendationId, function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc.fields);
            }
        })
        return deferred.promise;
    }

    function createFieldForRecommendation(recommendationId,field){
        var deferred = q.defer();
        var recommendationId = mongoose.Types.ObjectId(recommendationId);
        RecommendationCollection.findByIdAndUpdate(recommendationId,{$push:{"fields":field}},
            function(err,doc){
                if (err) {
                    deferred.reject(err);
                } else {
                    console.log(doc);
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function deleteFieldByLabel(recommendationId,fieldLabel){
        var deferred = q.defer();
        var recommendationId = mongoose.Types.ObjectId(recommendationId);
        RecommendationCollection.findByIdAndUpdate(recommendationId,{$pull:{"fields":{label:fieldLabel}}},
            function(err,doc){
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function updateFieldForRecommendation(recommendationId,fieldLabel,field){
        var deferred = q.defer();
        RecommendationCollection.update({_id:recommendationId,"fields.label":fieldLabel},{$set:{"fields.$":field}},
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