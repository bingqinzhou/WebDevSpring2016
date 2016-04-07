/**
 * Created by bingqinzhou on 3/31/16.
 */
module.exports = function(mongoose) {

    var FieldSchema = require("./field.schema.server.js")(mongoose);
    var objectId = mongoose.Schema.Types.ObjectId;
    var FormSchema = new mongoose.Schema(
        {
            _id:objectId,
            userId: objectId,
            title: {type: String, default: "New Form"},
            fields: [FieldSchema],
            created: {type: Date, default: Date.now},
            upated: {type: Date, default: Date.now}
        }, {collection: "form"}
    );

    return FormSchema;
}