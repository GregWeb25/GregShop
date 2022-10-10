const ApiError = require('../errors/ApiError.js');
const bcrypt = require('bcrypt');
const {User, Basket} = require('../models/models.js')
const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateJwt = (id, email, role) => {
    const token = jwt.sign(
        {id, email, role}, 
        process.env.JWT_KEY,
        {expiresIn: '24h'}
        );
        return token;
}

class UserController {
    async registration(req, res){
        const {email, password, role} = req.body;
        if(!email || !password){
            return next(ApiError.badRequest('Error!'));
        }
        const candidate = await User.findOne({where: {email}});
        if(candidate){
            return next(ApiError.badRequest('Error!'));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if(!user){
            return next(ApiError.internal('User do not exist'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword){
            return next(ApiError.internal('Invalid password'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token});
    }

    async getAdmins(req, res){
        const admins = await User.findAll({where:{role:"ADMIN"}});
        return res.json(admins);
    }

    async deleteAdmin(req, res){
        const {id} = req.body;
        const admins = await User.update({role:"USER"},{where:{id}});
        return res.json(admins);
    }

    async addAdmin(req, res){
        const {email} = req.body;
        const admins = await User.update({role:"ADMIN"},{where:{email}});
        if(!admins){
            return res.status(404).send('Not found');
        }
        return res.json(admins);
    }

    async getAll(req, res){
        let users = await User.findAll();
        users.map(async(user,i) => {
            users[i] = {email: user.email, id: user.id};
        })
        return res.json(users);
    }

}


module.exports = new UserController();