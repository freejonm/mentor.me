const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models");

module.exports = {
    getPostByID: (req, res) => {
        db.Board.find({ _id: req.params.id })
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },

    getPostsByUser: (req, res) => {
        db.Board.find({ userID: req.params.id })
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },

    getAllPosts: (req, res) => {
        db.Board.find({})
        .populate({ path: 'post'})
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },
    
    getPostsByViews: (req, res) => {
        db.Board.find({})
        .populate({ path: "posts", options: { sort: { views: -1 } } })
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },

    getPostsByLikes: (req, res) => {
        db.Board.find({})
        .populate({ path: "posts", options: { sort: { likes: -1 } } })
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },

    createPost: (req, res) => {
        console.log(req.body)
        db.Board.create(req.body)
        console.log(req.body)
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },

    createComment: (req, res) => {
        db.Board.findOneAndUpdate({ _id: req.params.id }, { $push: { comments: req.bod } }, { new: true })
        .then(dbPost => {
            res.json({ post: dbPost})
        })
    },


}