/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(app,recommendationModel){

    app.get("/api/project/user/:userId/recommendation", function(req,res)
    {
        var userId = req.params.userId;
        recommendationModel.findAllRecommendationsForUser(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.get("/api/project/recommendation/:recommendationId", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        recommendationModel.findRecommendationById(recommendationId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.get("/api/project/recommendation", function(req,res){
        recommendationModel.findAllRecommendations()
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.delete("/api/project/recommendation/:recommendationId", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        recommendationModel.deleteRecommendationById(recommendationId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.post("/api/project/recommendation", function(req,res)
    {
        var recommendation = req.body;
        recommendationModel.createRecommendation(recommendation)
            .then(
                function(doc){
                    console.log(doc);
                    res.json(recommendation);
                    console.log(recommendation);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.put("/api/project/recommendation/:recommendationId", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        var recommendation = req.body;
        recommendationModel.updateRecommendationById(recommendationId, recommendation)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

}
