const {Type} = require('../models/models.js');
const ApiError = require('../errors/ApiError.js');

class TypeController {
    async create(req, res){
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }
    async getAll(req, res){
        const types = await Type.findAll();
        return res.json(types);
    }
    async delete(req, res){
        const {id} = req.body;
        const type = await Type.destroy({where:{id}});
        return res.json(type);
    }

}
module.exports = new TypeController();