/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(db,mongoose,RecommendationCollection){

    var api = {
        createRecommendation:createRecommendation,
        updateRecommendationById:updateRecommendationById,
        deleteRecommendationById:deleteRecommendationById,
        findAllRecommendations:findAllRecommendations,
        findRecommendationById:findRecommendationById,
        findAllRecommendationsForUser:findAllRecommendationsForUser
    };

    return api;

    function createRecommendation(recommendation){
        var recommendationId = mongoose.Types.ObjectId();
        recommendation._id = recommendationId;
        RecommendationCollection.create(recommendation);
    }

    function updateRecommendationById(recommendationId,recommendation){
        RecommendationCollection.update(
            {_id:mongoose.Types.ObjectId(recommendationId)},
            {$set:
            {title:recommendation.title,fields:recommendation.fields,upated:Date.now}});
    }

    function deleteRecommendationById(recommendationId){
        RecommendationCollection.remove({_id:mongoose.Types.ObjectId(recommendationId)});
    }

    function findAllRecommendations(){
        return RecommendationCollection.find();
    }

    function findRecommendationById(recommendationId){
        return RecommendationCollection.findOne({_id:recommendationId});
    }

    function findAllRecommendationsForUser(userId){
        return RecommendationCollection.find({userId:userId});
    }

};

