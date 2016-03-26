/**
 * Created by bingqinzhou on 3/12/16.
 */

var mock = require("./user.mock.json");

module.exports = function(app){

    //require json file;

    var api = {

        createUser:createUser,
        findAllUsers:findAllUsers,
        updateUser:updateUser,
        deleteUserById:deleteUserById,
        findUserById:findUserById,
        findUserByUsername:findUserByUsername,
        findUserByCredentials:findUserByCredentials

    }

    return api;

    function createUser(user){
        user.id = (new Date).getTime();
        mock.push(user);
        return user;
    };

    function findAllUsers(){
        return mock;
    };

    function updateUser(userId,user){
        for(var u in mock){
            if(mock[u]._id == userId){
                mock[u] = user;
                break;
            }
        }
        return user;
    };

    function deleteUserById(userId){
        var index = -1;
        for(var u in mock){
            index++;
            if(mock[u]._id == userId){
                mock.splice(index,1);
                break;
            }
        }
        return mock;
    };

    function findUserById(userId){
        for(var u in mock) {
            if( mock[u]._id === userId ) {
                return mock[u];
            }
        }
        return null;
    };

    function findUserByUsername(username){
        for(var u in mock) {
            if( mock[u].username === username ) {
                return mock[u];
            }
        }
        return null;
    };

    function findUserByCredentials(credential){
        for(var u in mock){
            if(mock[u].username == credential.username
                && mock[u].password == credential.password){
                return mock[u];
            }
        }
        return null;
    };

};
