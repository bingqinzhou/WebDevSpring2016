/**
 * Created by bingqinzhou on 3/15/16.
 */

module.exports = function(app,userModel,formModel){

    app.get("/api/assignment/form/:formId/field", function(req,res)
    {
        var formId = req.params.formId;
        var fields = formModel.findAllFieldsForForm(formId);
        res.json(fields);
    })

    app.get("/api/assignment/form/:formId/field/:fieldId", function(req,res)
    {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = formModel.findFieldByIdForForm(formId,fieldId);
        res.json(field);
    })

    app.delete("/api/assignment/form/:formId/field/:fieldId", function(req,res)
    {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var fields = formModel.deleteFieldByIdForForm(formId,fieldId);
        res.json(fields);
    })

    app.post("/api/assignment/form/:formId/field", function(req,res)
    {
        var formId = req.params.formId;
        var field = req.body;
        var fields = formModel.createFieldForForm(formId,field);
        res.json(fields);
    })

    app.put("/api/assignment/form/:formId/field/:fieldId", function(req,res){
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        var fields = formModel.updateFieldForForm(formId,fieldId,field);
        res.json(fields);
    })

}