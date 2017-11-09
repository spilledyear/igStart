import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {stringify} from 'qs';
import {HttpService} from "../../../providers/HttpService";
import {NativeService} from "../../../providers/NativeService";


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  path: string = 'assets/imgs/github.png';      // 注意不要写成 /assets/imgs/github.png
  access_token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpLXJlc291cmNlIl0sInVzZXJfbmFtZSI6ImFkbWluIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIiwidHJ1c3QiXSwiZXhwIjoxNTA5MTk2OTcyLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiOWFmYmIyYWItMzdiYi00MTIyLTg2NDAtY2FmMDc1OTRmOGZkIiwiY2xpZW50X2lkIjoiY2xpZW50MiJ9.bJOpK0UjCI1ym32uerR_jKp4pv8aLaOxnTeK_DBjYZU';
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private httpService: HttpService,
              private camera: Camera,
              private transfer: FileTransfer,
              private file: File,
              private nativeService: NativeService,) {
  }

  ionViewDidLoad() {
    console.log(this.nativeService.isAndroid());

    // this.nativeService.alert('hahah', '666666');

    // this.nativeService.getVersionNumber().subscribe((res) =>( console.log(res)));
  }


  /**
   * 打开摄像头
   */
  openCamera() {
    const options: CameraOptions = {
      quality: 90,                                                   // 相片质量 0 -100
      destinationType: this.camera.DestinationType.DATA_URL,        // DATA_URL 是 base64   FILE_URL 是文件路径
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,                                       // 是否保存到相册
      // sourceType: this.camera.PictureSourceType.CAMERA ,         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('got file: ' + imageData);

      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.path = base64Image;

      // If it's file URI
      // this.path = imageData;
      // this.upload();

    }, (err) => {
      // Handle error
    });
  }


  /**
   * 文件上传
   */
  upload() {
    const apiPath = 'http://192.168.0.104:9090/api/commons/attach?' + stringify({access_token: this.access_token});
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',   // 文件名称
      headers: {},
      // 如果要传参数，写这里
      params: {
        maxSize: 5000000,
        modularName: 'CNL',
        allowType: 'jpg;png;pdf;doc;xls;xlsx;docx',
      }
    };

    this.fileTransfer.upload(this.path, apiPath, options)
      .then((data) => {
        console.log(data);

      }, (err) => {
        console.log(err);
      });
  }


  /**
   * 文件下载
   */
  download() {
    const url = 'http://192.168.0.104:9090/api/fms/sys/attach/file/detail?' + stringify({
      fileId: 17161,
      access_token: this.access_token
    });
    this.fileTransfer.download(url, this.file.externalApplicationStorageDirectory + 'Mac.png').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      console.log(error);
    });
  }

}
