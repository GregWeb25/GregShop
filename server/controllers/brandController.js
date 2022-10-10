const {Brand} = require('../models/models.js');
const ApiError = require('../errors/ApiError.js');

class BrandController {
    async create(req, res){
        const {name} = req.body;
        const brand = await Brand.create({name});
        return res.json(brand);
    }
    async getAll(req, res){
        const brands = await Brand.findAll();
        return res.json(brands)
    }
    async delete(req, res){
        console.log("BODY: " + req.body);
        const {id} = req.body;
        const brand = await Brand.destroy({where:{id}});
        return res.json(brand);
    }

}

module.exports = new BrandController();