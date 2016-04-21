/**
 * Created by bingqinzhou on 3/12/16.
 */

var q = require("q");

module.exports = function(db,mongoose,UserCollection){

    //var UserSchema = require("./user.schema.server.js")(mongoose);
    //var UserModel = mongoose.model("UserModel",UserSchema);

    var api = {

        createUser:createUser,
        updateUser:updateUser,
        deleteUserById:deleteUserById,
        findAllUsers:findAllUsers,
        findUserById:findUserById,
        findUserByUsername:findUserByUsername,
        findUserByCredentials:findUserByCredentials

    }

    return api;

    function createUser(user){
        var deferred = q.defer();
        var userId = mongoose.Types.ObjectId();
        user._id = userId;
        UserCollection.create(user, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function updateUser(userId,user){
        var deferred = q.defer();
        UserCollection.update({_id:userId},
            {$set:{username:user.username,password:user.password,
                             firstName:user.firstName, lastName:user.lastName,
                             email:user.email,phone:user.phone,roles:user.roles}},
        function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function deleteUserById(userId){
        var deferred = q.defer();
        UserCollection.remove({_id:mongoose.Types.ObjectId(userId)}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findAllUsers(){
        var deferred = q.defer();
        UserCollection.find(function(err,doc){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findUserById(userId){
        var deferred = q.defer();
        UserCollection.findOne({_id:userId}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findUserByUsername(username){
        var deferred = q.defer();
        UserCollection.findOne({username:username}, function (err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    };

    function findUserByCredentials(credential){
        var deferred = q.defer();
        UserCollection.findOne({username:credential.username,password:credential.password},
            function (err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(doc);
                }
            });
        return deferred.promise;
    };

};
