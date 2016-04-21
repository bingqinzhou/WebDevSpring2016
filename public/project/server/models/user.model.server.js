/**
 * Created by bingqinzhou on 4/20/16.
 */
module.exports = function(db,mongoose,UserCollection){

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
        var userId = mongoose.Types.ObjectId();
        user._id = userId;
        UserCollection.create(user);
    }

    function updateUser(userId,user){
        UserCollection.update({_id:userId},
            {$set:{username:user.username,password:user.password,
                firstName:user.firstName, lastName:user.lastName,
                email:user.email,roles:user.roles}});
    }

    function deleteUserById(userId){
        UserCollection.remove({_id:mongoose.Types.ObjectId(userId)});
    }

    function findAllUsers(){
        return UserCollection.find();
    }

    function findUserById(userId){
        return UserCollection.findOne({_id:userId});
    }

    function findUserByUsername(username){
        return UserCollection.findOne({username:username});
    }

    function findUserByCredentials(credential){
        return UserCollection.findOne({username:credential.username,password:credential.password});
    }

};
