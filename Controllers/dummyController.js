const Post = require('../Models/DummyModel');

exports.savePost = (req, res) => {
    const post = new Post({
        ...req.body
    });
    post.save()
        .then(_ => {
            res.status(201).json({
                success: true,
                msg: 'Post saved'
            });
        })
        .catch(msg => {
            res.status(422).json({
                success: false,
                msg
            });
        })
}

exports.getAllPost = (req, res) => {
    Post.find()
        .then(posts => {
            res.status(201).json({
                success: true,
                msg: 'Post received',
                posts
            });
        })
        .catch(msg => {
            res.status(422).json({
                success: false,
                msg
            });
        })
}