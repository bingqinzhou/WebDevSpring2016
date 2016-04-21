/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(app,db,mongoose){

    var UserSchema = require("./models/user.schema.server.js")(mongoose);
    var RecommendationSchema = require("./models/recommendation.schema.server.js")(mongoose);
    var FieldSchema = require("./models/field.schema.server.js")(mongoose);

    var UserCollection = mongoose.model("UserModel",UserSchema);
    var RecommendationCollection = mongoose.model("Recommendation",RecommendationSchema);
    var FieldCollection = mongoose.model("FieldModel",FieldSchema);

    var userModel = require("./models/user.model.server.js")(db,mongoose,UserCollection);
    var RecommendationModel = require("./models/recommendation.model.server.js")(db,mongoose,RecommendationCollection);
    var fieldModel = require("./models/field.model.server.js")(db,mongoose,RecommendationCollection);

    var userService = require("./services/user.service.server.js")(app, userModel);
    var recommendationService = require("./services/recommendation.service.server.js")(app, RecommendationModel);
    var fieldService = require("./services/field.service.server.js")(app,fieldModel);
}

