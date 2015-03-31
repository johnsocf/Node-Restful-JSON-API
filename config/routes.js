var express = require('express');
var router = express.Router();
var UsersController = require('../controllers/users');
var PostsController = require('../controllers/posts');



/* GET users listing. */
router.get('/users', UsersController.list);

router.get('/users/:id', UsersController.detail);

router.get('/posts', PostsController.list);

router.get('/posts/:id', PostsController.list);

module.exports = router;
