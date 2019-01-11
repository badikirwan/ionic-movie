import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UpcomingPage } from '../upcoming/upcoming';
import { NowplayingPage } from '../nowplaying/nowplaying';
import { SearchPage } from '../search/search'; 
import { from } from 'rxjs/observable/from';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  upcomingRoot = UpcomingPage;
  nowplayingRoot = NowplayingPage;
  searchRoot = SearchPage;


  constructor(public navCtrl: NavController) {}

}
