/**
 * Created by bingqinzhou on 3/14/16.
 */

module.exports = function(app,userModel){

    app.post("/api/assignment/user", function(req,res)
    {
        var user = req.body;
        userModel.createUser(user)
            .then(
                function(doc){
                    res.json(user);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.put("/api/assignment/user/:id", function(req,res)
    {
        var userId = req.params["id"];
        var user = req.body;
        userModel.updateUser(userId,user)
            .then(
                function(doc){
                    res.json(user);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.delete("/api/assignment/user/:id", function(req,res)
    {
        var userId = req.params["id"];
        userModel.deleteUserById(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.get("/api/assignment/user", function(req,res)
    {
        userModel.findAllUsers()
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.get("/api/assignment/user/:id", function(req,res)
    {
        var userId = req.params["id"];
        userModel.findUserById(userId)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })

    app.get("/api/assignment/user?username=username", function(req,res)
    {
        var username = req.body;
        userModel.findUserByUsername(username)
            .then(
                function(doc){
                    res.json(doc);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    })


    app.get("/api/assignment/userCred/:username/:password", function(req,res)
    {
        var credential = {
            username: req.params.username,
            password: req.params.password
        };
        userModel.findUserByCredentials(credential)
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
