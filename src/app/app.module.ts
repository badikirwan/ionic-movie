import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { MovieService } from '../services/movie.service';
import { HttpModule } from '@angular/http';
import { DetailPage } from '../pages/detail/detail';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { NowplayingPage } from '../pages/nowplaying/nowplaying'; 

@NgModule({
  declarations: [
    MyApp,
    NowplayingPage,
    UpcomingPage,
    DetailPage,
    SearchPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NowplayingPage,
    UpcomingPage,
    DetailPage,
    SearchPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
