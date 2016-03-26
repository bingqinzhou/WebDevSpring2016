/**
 * Created by bingqinzhou on 3/14/16.
 */

module.exports = function(app,userModel,formModel){

    app.get("/api/assignment/user/:userId/form", function(req,res)
    {
        var userId = req.params.userId;
        var forms = formModel.findAllFormsForUser(userId);
        res.json(forms);
    })

    app.get("/api/assignment/form/:formId", function(req,res)
    {
        var formId = req.params.formId;
        var form = formModel.findFormById(formId);
        res.json(form);
    })

    app.delete("/api/assignment/form/:formId", function(req,res)
    {
        var formId = req.params.formId;
        var form = formModel.deleteFormById(formId);
        var userId = form.userId;
        var forms = formModel.findAllFormsForUser(userId);
        res.json(forms);
    })

    app.post("/api/assignment/user/:userId/form", function(req,res)
    {
        var newForm = req.body;
        var userId = req.params.userId;
        formModel.createFormForUser(userId, newForm);
        var forms = formModel.findAllFormsForUser(userId);
        res.json(forms);
    })

    app.put("/api/assignment/form/:formId", function(req,res)
    {
        var formId = req.params.formId;
        var form = req.body;
        formModel.updateFormById(formId, form);
        var userId = form.userId;
        var forms = formModel.findAllFormsForUser(userId);
        res.json(forms);
    })
    
}
