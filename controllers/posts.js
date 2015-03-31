var PostsModel = require('../models/posts');

var PostsController = module.exports = {
  list: function(req, res) {
      var posts = PostsModel.findAll();
      res.json(posts);
  },
  detail:  function(req, res) {
      var post = PostsModel.findById(req.params.id);
      if (user == undefined) {
          //res.json({error:"ERR_NOT_FOUND"});
          res.notFound();
          return;
      }
      res.json(post);
  }
};