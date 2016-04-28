/**
 * Created by bingqinzhou on 3/14/16.
 */

module.exports = function(app,userModel,bcrypt){

    var admin = admin;

    app.post("/api/user",function(req,res)
    {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);

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

    app.put("/api/user/:id",function(req,res)
    {
        var userId = req.params["id"];
        var user = req.body;

        userModel.findUserById(userId)
            .then(
                function(oUser){
                   if(oUser.password !== user.password){
                       user.password = bcrypt.hashSync(user.password);
                   }
                });

        userModel.updateUser(userId,user)
            .then(
                function(doc){
                    res.json(user);
                },
                function(err){
                    res.status(400).send(err);
                }
            )

    })

    app.delete("/api/user/:id",function(req,res)
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

    app.get("/api/user",function(req,res)
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

    app.get("/api/user/:id", function(req,res)
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

    app.get("/api/user?username=username", function(req,res)
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


    app.get("/api/userCred/:username/:password", function(req,res)
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

    function admin(req, res, next) {
        if(req.user.roles.indexOf("admin") === -1) {
            res.send(403);
        }
        next();
    }

}
