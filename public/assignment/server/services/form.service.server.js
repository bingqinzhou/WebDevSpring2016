/**
 * Created by bingqinzhou on 3/14/16.
 */

module.exports = function(app,formModel){

    app.get("/api/assignment/user/:userId/form", function(req,res)
    {
        var userId = req.params.userId;
        formModel.findAllFormsForUser(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.get("/api/assignment/form/:formId", function(req,res)
    {
        var formId = req.params.formId;
        formModel.findFormById(formId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.delete("/api/assignment/form/:formId", function(req,res)
    {
        var formId = req.params.formId;
        formModel.deleteFormById(formId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.post("/api/assignment/user/:userId/form", function(req,res)
    {
        var form = req.body;
        var userId = req.params.userId;
        formModel.createFormForUser(userId, form)
            .then(
                function(doc){
                    console.log(doc);
                    res.json(form);
                    console.log(form);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.put("/api/assignment/form/:formId", function(req,res)
    {
        var formId = req.params.formId;
        var form = req.body;
        formModel.updateFormById(formId, form)
            .then(
                function(doc){
                    res.json(form);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })
    
}
