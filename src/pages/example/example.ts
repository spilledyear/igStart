import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CameraPage} from './camera/camera';
import {LocationPage} from './location/location';


@IonicPage()
@Component({
  selector: 'page-example',
  templateUrl: 'example.html',
})
export class ExamplePage {

  rootPage: any = CameraPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }



  goCamera() {
    this.rootPage = CameraPage;
  }


  goLocation() {
    this.rootPage = LocationPage;
  }

  goImage() {
    this.navCtrl.push('PhotoPage');
  }

  goTable(){
    this.navCtrl.push('TablePage');
  }

}
