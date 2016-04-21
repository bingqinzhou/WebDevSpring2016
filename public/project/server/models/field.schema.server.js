/**
 * Created by bingqinzhou on 4/20/16.
 */

module.exports = function(mongoose) {
    var FieldSchema = new mongoose.Schema({
        label:String,
        type:{type:String,enum:['TEXT', 'TEXTAREA']},
        value:String
    },{collection: "field"});
    return FieldSchema;
}
