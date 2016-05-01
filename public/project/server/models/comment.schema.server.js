/**
 * Created by bingqinzhou on 4/30/16.
 */

module.exports = function(mongoose) {
    var objectId = mongoose.Schema.Types.ObjectId;
    var CommentSchema = new mongoose.Schema({
        content:String,
        userId:objectId,
        username:String,
        created:{type: Date, default: Date.now()}
    },{collection: "comment"});
    return CommentSchema;
}