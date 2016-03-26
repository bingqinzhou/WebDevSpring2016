/**
 * Created by bingqinzhou on 3/14/16.
 */

module.exports = function(app,userModel){

    app.post("/api/assignment/user", function(req,res)
    {
        var user = req.body;
        userModel.createUser(user);
        res.json(user);

    })

    app.get("/api/assignment/user", function(req,res)
    {
        var users = userModel.findAllUsers();
        res.json(users);
    })

    app.get("/api/assignment/user/:id", function(req,res)
    {
        var userId = req.params["id"];
        var user = userModel.findUserById(userId);
        res.json(user);
    })

    app.get("/api/assignment/user?username=username", function(req,res)
    {
        var username = req.body;
        var user = userModel.findUserByUsername(username);
        res.json(user);
    })


    app.get("/api/assignment/userCred/:username/:password", function(req,res)
    {
        var credential = {
            username: req.params.username,
            password: req.params.password
        };
        var user = userModel.findUserByCredentials(credential);
        res.json(user);
    })

    app.put("/api/assignment/user/:id", function(req,res)
    {
        var userId = req.params["id"];
        var user = req.body;
        userModel.updateUser(userId,user);
        res.json(user);
    })

    app.delete("/api/assignment/user/:id", function(req,res)
    {
        var userId = req.params["id"];
        userModel.deleteUserById(userId);
        var users = userModel.findAllUsers();
        res.json(users);
    })


}
