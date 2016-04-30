/**
 * Created by bingqinzhou on 4/20/16.
 */

var q = require("q");

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
        var deferred = q.defer();
        var recommendationId = mongoose.Types.ObjectId();
        recommendation._id = recommendationId;
        RecommendationCollection.create(recommendation, function(err,doc){
            if (err) {
                console.log(err);
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function updateRecommendationById(recommendationId,recommendation){
        var deferred = q.defer();
        RecommendationCollection.update(
            {_id:mongoose.Types.ObjectId(recommendationId)},
            {$set:{title:recommendation.title,fields:recommendation.fields,rating:recommendation.rating}},
            function(err,doc){
                if (err) {
                    console.log(err);
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function deleteRecommendationById(recommendationId){
        var deferred = q.defer();
        RecommendationCollection.remove({_id:mongoose.Types.ObjectId(recommendationId)},
            function(err,doc){
                if (err) {
                    console.log(err);
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    }

    function findAllRecommendations(){
        var deferred = q.defer();
        RecommendationCollection.find(function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findRecommendationById(recommendationId){
        var deferred = q.defer();
        RecommendationCollection.findOne({_id:recommendationId},function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findAllRecommendationsForUser(userId){
        var deferred = q.defer();
        return RecommendationCollection.find({userId:userId},function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

};

