import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieService } from '../../services/movie.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Movie } from '../../classes/movie.class';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the UpcomingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming',
  templateUrl: 'upcoming.html',
})
export class UpcomingPage {

  movies: Movie[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public movieService: MovieService, private loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingPage');
    let loader = this.loadingCtrl.create({content: "Please wait..."});
    loader.present();
    this.movieService.upComingMovie().subscribe(output => {
      loader.dismiss();
      this.movies = output.results;
      console.log(output.results);
    }, error => {
      loader.dismiss();
      this.errorHandler(error);
    });
  }

  onGotoDetailContactPage(contact) {
    this.navCtrl.push(DetailPage, contact);
  }

  errorHandler(error) {
    const alert = this
    .alertCtrl
    .create({title: 'Error', message: error, buttons: ['Ok']});
    alert.present();
  }

}
