import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../services/movie.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Movie } from '../../classes/movie.class';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  movies: Movie[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieService: MovieService, private loadingCtrl: LoadingController, private alertCtrl: AlertController){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onInput(ev: any) {
    console.log('ionViewDidLoad NowplayingPage');
    const val = ev.target.value;

    let loader = this.loadingCtrl.create({content: "Please wait..."});
    loader.present();

    if (val && val.trim() != '') {
      this.movieService.searchMovie(val).subscribe(output => {
        loader.dismiss();
        this.movies = output.results;
        console.log(output.results);
      }, error =>{
        loader.dismiss();
        this.errorHandler(error);
      });
    } else {
      loader.dismiss();
    }
  }

  errorHandler(error){
    const alert = this
    .alertCtrl
    .create({title: 'Error', message: error, buttons: ['Ok']});
    alert.present();
  }



}
