const uuid = require('uuid');
const path = require('path');
const ApiError = require('../errors/ApiError.js');
const {Device, DeviceInfo} = require('../models/models.js');
const { Op, literal, fn } = require('@sequelize/core');

class DeviceController {
    async delete(req, res){
        const {id} = req.body;
        const device = Device.destroy({where: {id}});
        return res.json(device);
    }
    async create(req, res){
        try {
            const {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName= uuid.v4() + '.jpg';
            img.mv(path.resolve('./static',fileName));
            const device = await Device.create({name, price, brandId, typeId, img: fileName});
            if (info) {
                let parsedInfo = JSON.parse(info);
                parsedInfo.forEach(i => 
                        DeviceInfo.create({
                            title: i.title,
                            description: i.description,
                            deviceId: device.id,
                        })
                    )
            }
            return res.json(device);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res){
        let {brandId, typeId, limit, page, priceLimitMin, priceLimitMax} = req.query;
        if(brandId == undefined){
            brandId = null;
        }
        if(typeId == undefined){
            typeId = null;
        }
        console.log("_________________");
        console.log(brandId, typeId);
        console.log("_________________");
        let priceLimit = {min: priceLimitMin, max: priceLimitMax}
        page = page || 1;
        limit = limit || 5;
        if(!priceLimit.min || !priceLimit.max || priceLimit.max == 1){
            priceLimit.min = 0;
            priceLimit.max = 999999999;
        }
        let offset = page * limit - limit;
        let devices;
        if(!brandId && !typeId){
            devices = await Device.findAll({where:{ 
                price: {[Op.between]: [priceLimit.min, priceLimit.max]}}})
        }
        if(!brandId && typeId){
            devices = await Device.findAll({where:{typeId, 
                price: {[Op.between]: [priceLimit.min, priceLimit.max]}}});
        }
        if(brandId && !typeId){
            devices = await Device.findAll({where:{brandId, 
                price: {[Op.between]: [priceLimit.min, priceLimit.max]}}});
        }
        if(brandId && typeId){
            devices = await Device.findAll({where:{brandId, typeId, 
                price: {[Op.between]: [priceLimit.min, priceLimit.max]}}});
        }
        return res.json(devices);
    }
    async getOne(req, res){
        const {id} = req.params;
        const device = await Device.findOne({where: {id}, include: [{model: DeviceInfo, as: 'info'}]},);
        return res.json(device);
    }
}

module.exports = new DeviceController();