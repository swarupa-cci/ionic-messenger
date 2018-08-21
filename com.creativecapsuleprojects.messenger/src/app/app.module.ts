import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SplashPage} from '../pages/splash/splash';
import {LoginPage} from '../pages/login/login';
import {ProfilePage} from '../pages/profile/profile';
import { DbServiceProvider } from '../providers/dbservice/dbservice';
import { WebserviceProvider } from '../providers/webservice/webservice';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {Slide1Page} from '../pages/slide1/slide1'
import {TutorialPage} from '../pages/tutorial/tutorial'
import {Camera} from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    LoginPage,
    ProfilePage,
    Slide1Page,
    TutorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SplashPage,
    LoginPage,
    ProfilePage,
    Slide1Page,
    TutorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbServiceProvider,
    WebserviceProvider,
    Camera
  ]
})
export class AppModule {}
