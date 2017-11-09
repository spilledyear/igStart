import {Component, ViewChild} from '@angular/core';
import {Platform, Nav, ToastController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {NativeService} from '../providers/NativeService';
import {TabsPage} from '../pages/tabs/tabs';
import {LocalNotifications} from "@ionic-native/local-notifications";

@Component({
  templateUrl: 'app.html'
})
export class RootApp {
  rootPage: any;
  backButton: boolean = false;  // 用于判断返回键是否触发
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,
              private toastCtrl: ToastController,
              private nativeService: NativeService,
              private localNotifications: LocalNotifications,) {

    // 加载tabs页面之前先判断是否登录（就是进入系统时展示登录界面）
    if (!this.nativeService.isLogin(false)) {
      this.rootPage = 'LoginPage';
    } else {
      this.rootPage = 'TabsPage';
    }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.initializeApp();
    });
  }


  initializeApp() {
    this.testStatus();
    this.platform.ready().then(() => {
      // 注册返回按键事件
      this.platform.registerBackButtonAction((): any => {
        let page = this.nav.getActive().instance;
        //非tabs页
        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            return this.showExit();
          }
          return this.nav.pop();
        }

        let tabs = page.tabs;
        let activeNav = tabs.getSelected();
        if (!activeNav.canGoBack()) {
          //当前页面为tab栏，退出APP
          return this.showExit();
        }
        //当前页面为tab栏的子页面，正常返回
        return activeNav.pop();

      }, 100);
    });
  }

  // 双击退出提示框
  showExit() {
    // 当触发标志为true时，即2秒内双击返回按键则退出APP
    if (this.backButton) {
      this.platform.exitApp();
    } else {
      let toast = this.toastCtrl.create({
        message: '再按一次返回键退出应用',
        duration: 2000,
        cssClass: 'zm-back-button ',
        position: 'middle',
      });
      toast.present();
      this.backButton = true;
      // 2秒内没有再次点击返回则将触发标志标记为false
      setTimeout(() => {
        this.backButton = false;
      }, 2000);
    }
  }

  testStatus() {
    this.localNotifications.schedule({
      id: 1,
      title: '筑美通知',
      text: '这是显示通知栏的内容',
      icon: 'http://example.com/icon.png',
      at: new Date(new Date().getTime() + 3000),
    });

    this.localNotifications.on('click', (notification) => {
      // alert(JSON.stringify(notification));
      this.nav.push('PersonalPage',{aaaaa: notification});
    });
  }
}
