import { $authHost, $host } from ".";

export const createBasketDevice = async(deviceParams) => {
    const {data} = await $authHost.post('api/basket-device', deviceParams);
    return (data);
}

export const getBasketDevices = async(basketId) => {
    const {data} = await $authHost.get('api/basket-device', {params: 
        basketId
    });
    return (data);
}

export const deleteBasketDevices = async(deviceParams) => {
    const {data} = await $authHost.delete('api/basket-device', {data: 
        deviceParams
    });
    return (data);
}

export const getBasketId = async(deviceId) => {
    const {data} = await $host.get('api/basket', {params: 
        deviceId
    });
    return (data);
}
