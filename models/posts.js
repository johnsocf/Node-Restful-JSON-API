var posts = [
    {
        user_id: 0,
        title: "My First Blog Post",
        created_at: 123456789,
        updated_at: 123456789,
        deleted_at: null
    },
    {
        user_id: 1,
        title: "My Second Blog Post",
        created_at: 123456789,
        updated_at: 123456789,
        deleted_at: null
    }
];

var PostsModel = module.exports = {
    findAll: function() {
        return posts;
    },
    findById: function(id) {
        return posts[id];
    }
};