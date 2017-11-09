import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

declare let AMap ;
// declare let baidumap_location;
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  items: Array<any> = [{name: '帅帅', age: 12, address: '呵呵大'}, {name: '帅帅2', age: 16, address: '呵呵大2'}];
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.baiduLocation();
  }

  goQuestion() {
    this.navCtrl.push('QuestionPage');
  }

  goLocation() {
    let that = this;
    let mapObj = new AMap.Map('iCenter');
    mapObj.plugin('AMap.Geolocation', function () {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', that.onComplete.bind(that));//返回定位信息
      AMap.event.addListener(geolocation, 'error', (data)=>{ console.log('定位失败' + data);});      //返回定位出错信息
    });
  }

  //解析定位结果
  onComplete(data) {
    console.log(data);
    console.log(data.position.toString());
    console.log(data.formattedAddress);
    var str=['定位成功'];
    str.push('经度：' + data.position.getLng());
    str.push('纬度：' + data.position.getLat());
    if(data.accuracy){
      str.push('精度：' + data.accuracy + ' 米');
    }//如为IP精确定位结果则没有精度信息
    str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
    // document.getElementById('tip').innerHTML = str.join('<br>');
  }





  baiduLocation(){
    // baidumap_location.getCurrentPosition(function (result) {
    //   alert(JSON.stringify(result));
    //   console.log(JSON.stringify(result, null, 4));
    // });
  }

}
