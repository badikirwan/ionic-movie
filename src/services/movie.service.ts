import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'


@Injectable()
export class MovieService {

    headers : any;
    options : any;
    url : string = 'https://api.themoviedb.org/3/movie/';
    key : string = '33a4f2f91284c9133695dfba6bd802da';

    constructor(private http : Http) {
        this.headers = new Headers({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
        this.options = new RequestOptions({headers: this.headers});
    }

    upComingMovie() {
        return this
            .http
            .get(this.url + 'upcoming?api_key=' + this.key, this.options)
            .pipe(map(res => res.json()))
    }

    nowPlayingMovie() {
        return this
            .http
            .get(this.url + 'now_playing?api_key=' + this.key, this.options)
            .pipe(map(res => res.json()))
    }

    // findAll() {
    //     return this
    //         .http
    //         .get(this.url + '/findall', this.options)
    //         .map(res => res.json())
    //         .catch(this.handleError)
    // }

    // searchByName(searchItem) {
    //     return this
    //         .http
    //         .post(this.url + '/search',searchItem, this.options)
    //         .map(res => res.json())
    //         .catch(this.handleError)
    // }

    // removeById(id) {
    //     return this
    //         .http
    //         .get(this.url + '/remove/'+id, this.options)
    //         .map(res => res.json())
    //         .catch(this.handleError)
    // }

    // save(contact){
    //     return this
    //     .http
    //     .post(this.url + '/save',contact, this.options)
    //     .map(res => res.json())
    //     .catch(this.handleError)
    // }

    // update(contact){
    //     return this
    //     .http
    //     .post(this.url + '/update',contact, this.options)
    //     .map(res => res.json())
    //     .catch(this.handleError)
    // }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}