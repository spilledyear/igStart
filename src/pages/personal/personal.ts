import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {ACCESS_TOKEN} from '../../domain/Constants';
import {StorageService} from "../../providers/StorageService";

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  constructor(private navCtrl: NavController,
              public navParams: NavParams,
              private storageService: StorageService,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
    console.log(this.navParams.get('aaaaa'));
  }

  exitSoftware() {
    this.alertCtrl.create({
      title: '确认退出？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            this.storageService.remove(ACCESS_TOKEN);
            this.navCtrl.parent.parent.setRoot('LoginPage');
            // this.platform.exitApp(); 杀死app进程
          }
        }
      ]
    }).present();
  }
}
