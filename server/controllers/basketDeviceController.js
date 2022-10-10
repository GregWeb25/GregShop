const ApiError = require('../errors/ApiError.js');
const {Device, DeviceInfo, Basket, BasketDevice} = require('../models/models.js');
const DeviceController = require('./deviceController');

class BasketDeviceController {

    async create(req, res){
        const {basketId, deviceId} = req.body;
        const basketDevice = await BasketDevice.create({basketId, deviceId});
        return res.json(basketDevice);
    }

    async delete(req, res){
        const {basketId, id} = req.body;
        const basketDevice = await BasketDevice.destroy({
            where: {
                basketId, 
                id
            }
        })
        return res.json(basketDevice);
    }

    async get(req, res){
        const {basketId} = req.query;
        let devices = [];
        const basket = await BasketDevice.findAll({where: {basketId}});
        for (let i = 0; i < basket.length; i++) {
            let element = await Device.findOne({where: {id: basket[i].deviceId}});
            element = {device: element, id: basket[i].id}
            devices.push(element)
            
        }
        return res.json(devices);
    }
}

module.exports = new BasketDeviceController();