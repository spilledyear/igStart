import {Component} from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeService} from "../../../providers/NativeService";

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  placeholder = 'assets/imgs/github.png';
  chosenPicture: any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              private nativeService: NativeService) {
  }

  ionViewDidLoad() {}

  changePicture() {
    this.actionSheetCtrl.create({
      buttons: [
        {
          text: '拍照',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: '相册',
          handler: () => {
            this.getPicture();
          }
        },
        {
          text: '取消',
          handler: () => {}
        }
      ]
    }).present();
  }

  takePicture() {
    this.nativeService.showLoading();
    this.nativeService.getPictureByCamera().subscribe((picture)=>{
      if (picture) {
        this.chosenPicture = picture;
        this.nativeService.hideLoading();
      }
    });
  }

  getPicture() {
    this.nativeService.showLoading();
    this.nativeService.getPictureByPhotoLibrary().subscribe((picture)=>{
      if (picture) {
        this.chosenPicture = picture;
        this.nativeService.hideLoading();
      }
    });
  }

}
