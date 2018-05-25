
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';

/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  location : {lat: number, lng: number};
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation) {
  }
  getLocation(){
    this.geolocation.getCurrentPosition().then((response) =>{
      this.location = {
        lat: response.coords.latitude,
        lng: response.coords.longitude
      };
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

}
