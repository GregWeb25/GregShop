import { $authHost, $host } from ".";

export const createType = async(type) => {
    const {data} = await $authHost.post('api/type', type);
    return (data);
}

export const createRating = async(rating) => {
    const {data} = await $authHost.post('api/rating', rating);
    return (data);
}

export const fetchRating = async(rating) => {
    const {data} = await $authHost.get('api/rating', {params: 
        rating
    });
    return (data);
}

export const fetchTypes = async() => {
    const {data} = await $host.get('api/type');
    return (data);
}

export const createBrand = async(brand) => {
    const {data} = await $authHost.post('api/brand', brand);
    return (data);
}

export const fetchBrands = async() => {
    const {data} = await $host.get('api/brand');
    return (data);
}

export const createDevice = async(device) => {
    const {data} = await $authHost.post('api/device', device);
    return (data);
}

export const fetchDevices = async(typeId, brandId, page, limit, priceLimitMin, priceLimitMax) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit, priceLimitMin, priceLimitMax
    }});
    return (data);
}

export const fetchOneDevice = async(id) => {
    const {data} = await $host.get('api/device/' + id);
    return (data);
}

export const deleteDevices = async(deviceParams) => {
    const {data} = await $authHost.delete('api/device', {data: 
        deviceParams
    });
    return (data);
}

export const deleteType = async(id) => {
    const {data} = await $authHost.delete('api/type', {data: {id}});
    return (data);
}

export const deleteBrand = async(id) => {
    const {data} = await $authHost.delete('api/brand', {data: {id}});
    return (data);
}
