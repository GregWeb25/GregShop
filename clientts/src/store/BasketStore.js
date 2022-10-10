import {makeAutoObservable} from 'mobx'


export default class BasketStore {
    constructor() {
        this._basketId = null;
        this._basketDevices = [];
        makeAutoObservable(this);
    }

    setBasketId(id) {
        this._basketId = id;
    }

    setBasketDevices(devices) {
        this._basketDevices = devices;
    }

    get basketId(){
        return this._basketId
    }

    get basketDevices() {
        return this._basketDevices;
    }
}