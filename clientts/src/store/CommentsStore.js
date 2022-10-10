import {makeAutoObservable} from 'mobx'

export default class CommentsStore {
    constructor() {
        this._comments = [];
        makeAutoObservable(this);
    }
    setComments(comments) {
        this._comments = comments
    }
    get comments(){
        return this._comments;
    }
}