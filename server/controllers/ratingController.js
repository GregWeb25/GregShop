const ApiError = require('../errors/ApiError.js');
const {Rating, Device} = require('../models/models.js');

class RatingController {
    async create(req, res){
        const {userId, deviceId, rate} = req.body;
        console.log('_________');
        console.log(req.body);
        console.log('_________');
        let rating = await Rating.findOne({where: {userId, deviceId}});
        if(rating){
            rating = await Rating.update({rate},{where: {userId, deviceId}})
        } else {
            rating = await Rating.create({userId, deviceId, rate});
        }
        let rates = await Rating.findAll({where: {deviceId}});
        let totalRate = 0;
        for (let i = 0; i < rates.length; i++) {
            totalRate += rates[i].rate;
        }
        totalRate = totalRate/rates.length;
        await Device.update({rating: totalRate},{where: {id: deviceId}});
        return res.json(rating)
    }
    async getOne(req, res){
        const {userId, deviceId} = req.query;
        console.log(req.query);
        let rating = await Rating.findOne({where: {userId, deviceId}})
        return res.json(rating);
    }

}

module.exports = new RatingController();