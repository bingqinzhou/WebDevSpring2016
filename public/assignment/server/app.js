/**
 * Created by bingqinzhou on 3/12/16.
 */

module.exports = function(app){
    var userModel = require("./models/user.model.server.js")();
    var formModel = require("./models/form.model.server.js")();

    var userService = require("./services/user.service.server.js")(app, userModel);
    var formService = require("./services/form.service.server.js")(app, userModel, formModel);
    var fieldService = require("./services/field.service.server.js")(app,userModel,formModel);
}
