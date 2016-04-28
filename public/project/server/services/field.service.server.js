/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(app,fieldModel){


     app.get("/api/project/recommendation/:recommendationId/field", function(req,res)
     {
         var recommendationId = req.params.recommendationId;
         fieldModel.findAllFieldsForRecommendation(recommendationId)
             .then(
                 function(doc){
                     res.json(doc);
                 },
                 function(err){
                     res.status(400).send(err);
                 }
             );
     })

    app.delete("/api/project/recommendation/:recommendationId/field/:fieldLabel", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        var fieldLabel = req.params.fieldLabel;
        fieldModel.deleteFieldByLabel(recommendationId,fieldLabel)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.post("/api/project/recommendation/:recommendationId/field", function(req,res)
    {
        var recommendationId = req.params.recommendationId;
        var field = req.body;
        fieldModel.createFieldForRecommendation(recommendationId,field)
            .then(
                function(doc){
                    res.json(field);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.put("/api/project/recommendation/:recommendationId/field/:fieldLabel", function(req,res){
        var recommendationId = req.params.recommendationId;
        var fieldLabel = req.params.fieldLabel;
        var field = req.body;
        fieldModel.updateFieldForRecommendation(recommendationId,fieldLabel,field)
            .then(
                function(doc){
                    res.json(field);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

}