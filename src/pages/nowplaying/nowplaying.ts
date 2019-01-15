import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../services/movie.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Movie } from '../../classes/movie.class';
import { SearchPage } from '../search/search';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the NowplayingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nowplaying',
  templateUrl: 'nowplaying.html',
})
export class NowplayingPage {

  movies: Movie[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieService: MovieService, private loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowplayingPage');
    let loader = this.loadingCtrl.create({content: "Please wait..."});
    loader.present();
    this.movieService.nowPlayingMovie().subscribe(output => {
      loader.dismiss();
      this.movies = output.results;
      console.log(output.results);
    }, error=>{
      loader.dismiss();
      this.errorHandler(error);
    });
  }

  onGotoSearchMoviePage(){
    this.navCtrl.push(SearchPage);
  }

  onGotoDetailMoviePage(movie) {
    this.navCtrl.push(DetailPage, movie);
  }

  errorHandler(error){
    const alert = this
    .alertCtrl
    .create({title: 'Error', message: error, buttons: ['Ok']});
    alert.present();
  }


}
