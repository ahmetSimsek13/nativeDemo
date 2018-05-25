import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Vibration } from "@ionic-native/vibration";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { VibrationPage } from '../pages/vibration/vibration';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { CameraPage } from '../pages/camera/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VibrationPage,
    GeolocationPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
