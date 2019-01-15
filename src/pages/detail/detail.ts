import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Movie } from '../../classes/movie.class';
import { MovieService } from '../../services/movie.service';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  movies: Movie = new Movie();

  constructor(public navCtrl: NavController, public navParams: NavParams, private contactService: MovieService,
    private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.movies = this.navParams.data;
  }

  // onRemove(){
  //   let loader = this
  //   .loadingCtrl
  //   .create({content: "Please wait..."});
  //   loader.present();
  //   this.contactService.removeById(this.contact.id).subscribe(output=>{
  //     loader.dismiss();
  //     this.navCtrl.pop();
  //     this.msgHandler('Success', 'Contact deleted');
  //   },error=>{
  //     loader.dismiss();
  //     this.msgHandler('Error',error);
  //   })
  // }

  // confirmRemove() {
  //   let confirm = this.alertCtrl.create({
  //     title: 'Confirmation',
  //     message: 'Are you sure want to delete '+ this.contact.full_name,
  //     buttons: [
  //       {
  //         text: 'No',
  //         handler: () => {
  //           console.log('do nothing');
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           this.onRemove();
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

  // onEdit(){
  //   this.navCtrl.push(EditPage, this.contact);
  // }

  msgHandler(title: string, message: string){
    const alert = this
    .alertCtrl
    .create({title: title, message: message, buttons: ['Ok']});
    alert.present();
  }

}
