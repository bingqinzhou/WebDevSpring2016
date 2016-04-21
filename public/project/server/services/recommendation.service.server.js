/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(app,recommendationModel){

    app.get("/api/project/user/:userId/recommendation", function(req,res)
    {
        var userId = req.params.userId;
        var recommendations = recommendationModel.findAllRecommendationsForUser(userId);
        res.json(recommendations);
    })

    app.get("/api/project/recommendation/:recommendationId", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        var recommendation = recommendationModel.findRecommendationById(recommendationId);
        res.json(recommendation);
    })

    app.get("api/project/recommendation", function(req,res){
        var recommendations = recommendationModel.findAllRecommendations();
        res.json(recommendations);
    })

    app.delete("/api/project/recommendation/:recommendationId", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        recommendationModel.deleteRecommendationById(recommendationId);
        res.json(recommendationId);
    })

    app.post("/api/project/recommendation", function(req,res)
    {
        var recommendation = req.body;
        recommendationModel.createRecommendation(recommendation);
        res.json(recommendation);
    })

    app.put("/api/project/recommendation/:recommendationId", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        var recommendation = req.body;
        recommendationModel.updateRecommendationById(recommendationId, recommendation);
        res.json(recommendation);

    })

}
