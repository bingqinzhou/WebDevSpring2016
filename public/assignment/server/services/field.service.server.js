/**
 * Created by bingqinzhou on 3/15/16.
 */

module.exports = function(app,fieldModel){

    /**
    app.get("/api/assignment/form/:formId/field", function(req,res)
    {
        var formId = req.params.formId;
        var fields = formModel.findAllFieldsForForm(formId);
        res.json(fields);
    })
     */

    app.get("/api/assignment/form/:formId/field", function(req,res)
    {
        var formId = req.params.formId;
        fieldModel.findAllFieldsForForm(formId)
            .then(
                function(doc){
                   res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    /**
    app.get("/api/assignment/form/:formId/field/:fieldId", function(req,res)
    {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = formModel.findFieldByIdForForm(formId,fieldId);
        res.json(field);
    })
     */

    app.get("/api/assignment/form/:formId/field/:fieldId", function(req,res)
    {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        fieldModel.findFieldByIdForForm(formId,fieldId)
            .then(
                function(doc){
                   res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.delete("/api/assignment/form/:formId/field/:fieldId", function(req,res)
    {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        fieldModel.deleteFieldByIdForForm(formId,fieldId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.post("/api/assignment/form/:formId/field", function(req,res)
    {
        var formId = req.params.formId;
        var field = req.body;
        fieldModel.createFieldForForm(formId,field)
            .then(
                function(doc){
                    res.json(field);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.put("/api/assignment/form/:formId/field/:fieldId", function(req,res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        fieldModel.updateFieldForForm(formId,fieldId,field)
            .then(
                function(doc){
                    res.json(field);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    /**
    app.put("/api/assignment/form/:formId",function(req,res){

        var formId = req.params.formId;
        var prevpost = req.body;
        var startIndex = prevpost.startIndex;
        var endIndex = prevpost.endIndex;

        fieldModel.updateFieldsOrder(formId,startIndex,endIndex)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })
     */

}