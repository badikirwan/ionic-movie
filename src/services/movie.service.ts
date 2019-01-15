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
    url : string = 'https://api.themoviedb.org/3/';
    key : string = '33a4f2f91284c9133695dfba6bd802da';

    constructor(private http : Http) {
        this.headers = new Headers({'Content-Type': 'application/json', 'Cache-Control': 'no-cache'});
        this.options = new RequestOptions({headers: this.headers});
    }

    upComingMovie() {
        return this
            .http
            .get(this.url + 'movie/upcoming?api_key=' + this.key, this.options)
            .pipe(map(res => res.json()))
    }

    nowPlayingMovie() {
        return this
            .http
            .get(this.url + 'movie/now_playing?api_key=' + this.key, this.options)
            .pipe(map(res => res.json()))
    }

    searchMovie(movieTittle) {
        return this
            .http
            .get(this.url + 'search/movie?api_key=' + this.key + '&language=en-US&query=' + movieTittle, this.options)
            .pipe(map(res => res.json()))
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}