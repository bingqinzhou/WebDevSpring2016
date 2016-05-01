/**
 * Created by bingqinzhou on 4/20/16.
 */
module.exports = function(mongoose) {

    var FieldSchema = require("./field.schema.server.js")(mongoose);
    var CommentSchema = require("./comment.schema.server.js")(mongoose);
    var objectId = mongoose.Schema.Types.ObjectId;

    var RecommendationSchema = new mongoose.Schema(
        {
            _id:objectId,
            title: {type: String},
            userId: objectId,
            username:String,
            movieId:Number,
            rating:Number,
            fields: [FieldSchema],
            comments:[CommentSchema],
            created: {type: Date, default: Date.now()},
            upated: {type: Date, default: Date.now()}
        }, {collection: "recommendation"}
    );

    return RecommendationSchema;
}