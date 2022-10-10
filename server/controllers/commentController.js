const ApiError = require('../errors/ApiError.js');
const {Comment} = require('../models/models.js')
require('dotenv').config();


class CommentController {
    async get(req, res){
        const {deviceId} = req.query;
        const comments = await Comment.findAll({where:{deviceId}});
        return res.json(comments)
    }
    async create(req, res){
        const {userId, deviceId, parrentId, text} = req.body;
        const comment = await Comment.create({userId, deviceId, parrentId, text});
        return res.json(comment);
    }

    async delete(req, res){
        const {id} = req.body;
        const comment = await Comment.destroy({where:{id}});
        return res.json(comment);
    }
}


module.exports = new CommentController();