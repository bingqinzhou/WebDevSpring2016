/**
 * Created by bingqinzhou on 4/20/16.
 */
module.exports = function(mongoose){
    var objectId = mongoose.Schema.Types.ObjectId;
    var UserSchema = new mongoose.Schema({
        _id:objectId,
        username:String,
        password:String,
        firstName:String,
        lastName:String,
        email:String,
        roles:[String]
    },{collection:"user"});

    return UserSchema;
};
