const ApiError = require('../errors/ApiError.js');
const {Basket} = require('../models/models.js');

class BasketController {


    async getOne(req, res){
        const {userId} = req.query;
        // const basket = await Basket.findOne({where: {id}, include: [{model: BasketDevice, as: 'bascet-device'}]},);
        const basket = await Basket.findOne({where: {userId}});
        return res.json(basket.id);
    }
}

module.exports = new BasketController();