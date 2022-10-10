import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const registration = async(email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, role: 'USER'});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const login = async(email, password) => {
    const {data} = await $host.post('api/user/login', {email, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

export const getAdmins = async() => {
    const {data} = await $authHost.get('api/user/getadmins');
    return (data);
}

export const deleteAdmin = async(id) => {
    const {data} = await $authHost.post('api/user/deleteadmin', {id});
    return (data);
}

export const addAdmin = async(email) => {
    const {data} = await $authHost.post('api/user/addadmin', {email});
    return (data);
}

export const getAllUsers = async() => {
    const {data} = await $host.get('api/user');
    return (data);
}

export const check = async() => {
    try{
        const {data} = await $authHost.get('api/user/auth');
        const result = jwt_decode(data.token);
        return result;
    } catch (e){

    }
    
}