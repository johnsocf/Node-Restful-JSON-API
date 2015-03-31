var users = [
    {name:"Bob"},
    {name:"Joe"},
];

var UsersModel = module.exports = {
    findAll: function() {
        return users;
    },
    findById: function(id) {
        return users[id];
    }
};