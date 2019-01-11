import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contact.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Contact } from '../../classes/contact.class';

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

  contacts: Contact[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public contactService: ContactService, private loadingCtrl: LoadingController, 
    private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowplayingPage');
    let loader = this
    .loadingCtrl
    .create({content: "Please wait..."});
    loader.present();
    this.contactService.nowPlayingMovie().subscribe(output => {
      loader.dismiss();
      this.contacts = output.results;
      console.log(output.results);
    }, error=>{
      loader.dismiss();
      //this.errorHandler(error);
    });
  }

}
