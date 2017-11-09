import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  address: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private nativeService: NativeService) {
  }

  ionViewDidLoad() {
    this.location();
  }


  /**
   * 获取定位信息
   */
  location() {
    let that = this;
    this.nativeService.getUserLocation().subscribe(data=>{
      console.log(data);
      that.address = data.address;
    },error=>{
      console.log(JSON.stringify(error));
    });
    // let that = this;
    // LocationPlugin.getLocation(data => {
    //   console.log(data);
    //   let location = JSON.stringify(data);
    //   that.address = data.address;
    //   console.log(location);
    // }, error => {
    //   console.log(JSON.stringify(error));
    // });
  }

}
