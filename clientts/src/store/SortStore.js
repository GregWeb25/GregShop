import {makeAutoObservable} from 'mobx'


export default class SortStore {
    constructor() {
        this._sort = 'rating';
        this._isPriceFilter = false;
        this._priceFilter = {min: null, max: null};
        makeAutoObservable(this);
    }

    setSort(sortType) {
        this._sort = sortType;
    }

    setIsPriceFilter(bool) {
        this._isPriceFilter = bool;
    }
    setPriceFilter(interval) {
        this._priceFilter = interval;
    }

    get sort(){
        return this._sort;
    }

    get isPriceFilter() {
        return this._isPriceFilter;
    }
    get priceFilter() {
        return this._priceFilter;
    }
}