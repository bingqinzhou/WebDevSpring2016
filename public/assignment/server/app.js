/**
 * Created by bingqinzhou on 3/12/16.
 */

module.exports = function(app,db,mongoose){

    var UserSchema = require("./models/user.schema.server.js")(mongoose);
    var FormSchema = require("./models/form.schema.server.js")(mongoose);
    var FieldSchema = require("./models/field.schema.server.js")(mongoose);

    var UserCollection = mongoose.model("UserModel",UserSchema);
    var FormCollection = mongoose.model("FormModel",FormSchema);
    var FieldCollection = mongoose.model("FieldModel",FieldSchema);

    var userModel = require("./models/user.model.server.js")(db,mongoose,UserCollection);
    var formModel = require("./models/form.model.server.js")(db,mongoose,FormCollection);
    var fieldModel = require("./models/field.model.server.js")(db,mongoose,FormCollection);

    var userService = require("./services/user.service.server.js")(app, userModel);
    var formService = require("./services/form.service.server.js")(app, formModel);
    var fieldService = require("./services/field.service.server.js")(app,fieldModel);
    var securityService = require("./services/security.service.server.js")(app,userModel);
}
