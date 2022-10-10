import {makeAutoObservable} from 'mobx'


export default class UserStore {
    constructor() {
        this._isAuth = false;
        this._user = {role: 'USER', id: 0, email: ''};
        this._users = [];
        makeAutoObservable(this);
    }

    setIsAuth(bool) {
        this._isAuth = bool;
    }

    setUser(user) {
        this._user = user;
    }

    setUsers(users) {
        this._users = users;
    }

    get users(){
        return this._users
    }

    get isAuth(){
        return this._isAuth
    }

    get user() {
        return this._user
    }
}