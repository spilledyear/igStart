import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Events} from 'ionic-angular';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import 'rxjs/add/operator/map';

import {NativeService} from '../../providers/NativeService';
import {StorageService} from "../../providers/StorageService";
import {HttpService} from '../../providers/HttpService';
import {ACCESS_TOKEN, DEBUG} from '../../domain/Constants';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  username: any;
  password: any;
  backgroundImage: string = 'assets/imgs/login-back.jpg';

  constructor(private navCtrl: NavController,
              private formBuilder: FormBuilder,
              private events: Events,
              private httpService: HttpService,
              private nativeService: NativeService,
              private storageService: StorageService,) {

    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required,])],
      password: ['', Validators.compose([Validators.required, this.passValidator,])]
    });
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];

    // this.loginForm = formBuilder.group({
    //   username: [''],
    //   password: [''],
    // },{validator: this.groupValidator});
    //
    // this.username = this.loginForm.controls['username'];
    // this.password = this.loginForm.controls['password'];
  }

  login(value) {
    this.nativeService.showLoading('loading...');

    // 发布登录成功消息，刷新首页信息
    // this.viewCtrl.onDidDismiss(() => {
    //   this.events.publish('LOGIN_SUCCESS');
    // });

    let params = {
      client_id: 'client2',
      client_secret: 'secret',
      grant_type: 'password',
      username: value.username,
      password: value.password,
    };
    this.httpService.login('/oauth/token', params).then(result => {

      if (!result || !result.access_token) {
        this.nativeService.alert('登录失败', result.message);
        this.storageService.remove(ACCESS_TOKEN);
        return;
      }

      this.storageService.set(ACCESS_TOKEN, result.access_token);
      this.navCtrl.setRoot('TabsPage');

    }).catch(error => {
      DEBUG && console.log('访问错误：' + error);
      this.nativeService.hideLoading();
      this.nativeService.showToast('用户名或密码错误');
    });
  }


  /**
   * 自定义检验函数
   * @param {FormControl} control
   * @returns {{username: {info: string}}}
   */
  passValidator(control: FormControl) {
    const value = control.value;
    return value ? null : {password: {info: '密码不能为空'}};
  }


  /**
   * 自定义校验组函数
   * @param {FormGroup} controlGroup
   * @returns {any}
   */
  groupValidator(controlGroup: FormGroup): any {
    // 获取密码输入框的值
    const username = controlGroup.get('username').value as FormControl;
    const password = controlGroup.get('password').value as FormControl;

    let flag = (username && password) ? null : {username: {info: '用户名不能为空'}, password: {info: '密码不能为空'}};
    console.log(flag);
    return flag;
  }

}
