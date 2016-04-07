/**
 * Created by bingqinzhou on 3/31/16.
 */

module.exports = function(mongoose) {
    var objectId = mongoose.Schema.Types.ObjectId;
    var FieldSchema = new mongoose.Schema({
        _id:objectId,
        label:String,
        type:{type:String,enum:['TEXT', 'TEXTAREA', 'EMAIL',
            'PASSWORD', 'OPTIONS', 'DATE', 'RADIOS', 'CHECKBOXES']},
        placeholder:String,
        options:[{label:String,value:String}]
    },{collection: "field"});
    return FieldSchema;
}

