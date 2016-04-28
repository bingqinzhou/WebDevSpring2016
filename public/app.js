/**
 * Created by bingqinzhou on 3/12/16.
 */

module.exports = function(app,db,mongoose,bcrypt){

    var UserSchema = require("./user/user.schema.server.js")(mongoose);
    var UserCollection = mongoose.model("UserModel",UserSchema);
    var userModel = require("./user/user.model.server.js")(db,mongoose,UserCollection);
    require("./user/user.service.server.js")(app, userModel,bcrypt);
    require("./user/security.service.server.js")(app,userModel,bcrypt);

    var FormSchema = require("./assignment/server/models/form.schema.server.js")(mongoose);
    var FormCollection = mongoose.model("FormModel",FormSchema);
    var formModel = require("./assignment/server/models/form.model.server.js")(db,mongoose,FormCollection);
    require("./assignment/server/services/form.service.server.js")(app, formModel);

    var FieldSchema = require("./assignment/server/models/field.schema.server.js")(mongoose);
    var FieldCollection = mongoose.model("FieldModel",FieldSchema);
    var fieldModel = require("./assignment/server/models/field.model.server.js")(db,mongoose,FormCollection);
    require("./assignment/server/services/field.service.server.js")(app,fieldModel);

    var RecommendationSchema = require("./project/server/models/recommendation.schema.server.js")(mongoose);
    var RecommendationCollection = mongoose.model("Recommendation",RecommendationSchema);
    var RecommendationModel = require("./project/server/models/recommendation.model.server.js")(db,mongoose,RecommendationCollection);
    require("./project/server/services/recommendation.service.server.js")(app, RecommendationModel);

    var ContentSchema = require("./project/server/models/field.schema.server.js")(mongoose);
    var ContentCollection = mongoose.model("ContentModel",ContentSchema);
    var ContentModel = require("./project/server/models/field.model.server.js")(db,mongoose,RecommendationCollection);
    require("./project/server/services/field.service.server.js")(app,ContentModel);
};
