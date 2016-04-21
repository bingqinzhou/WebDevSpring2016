/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(db,mongoose,RecommendationCollection){

    var api = {
        findAllFieldsForRecommendation:findAllFieldsForRecommendation,
        deleteFieldByLabel:deleteFieldByLabel,
        createFieldForRecommendation:createFieldForRecommendation
    }

    return api;

    function findAllFieldsForRecommendation(recommendationId){
        var recommendation = RecommendationCollection.findById(recommendationId);
        return recommendation.fields;
    }

    function createFieldForRecommendation(recommendationId,field){
        RecommendationCollection.findByIdAndUpdate(recommendationId,{$push:{"fields":field}});
    }

    function deleteFieldByLabel(recommendationId,label){
        RecommendationCollection.findByIdAndUpdate(recommendationId,{$pull:{"fields":{label:label}}});
    }

}