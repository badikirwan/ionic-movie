import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactService } from '../services/contact.service';
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ContactService,
    CallNumber,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
