import {Injectable} from '@angular/core';
import {NativeService} from "./NativeService";

/**
 * Jpush 极光测试，安卓下可行，ios下不行
 * this.helper.initJpush();
 * this.helper.setTags();
 * this.helper.setAlias('test');
 */
@Injectable()
export class Helper {

  constructor(private nativeService: NativeService) {
  }

  initJpush() {
    if (!this.nativeService.isMobile()) {
      return;
    }
    window['plugins'].jPushPlugin.init();
    if (this.nativeService.isIos()) {
      window['plugins'].jPushPlugin.setDebugModeFromIos();
      window['plugins'].jPushPlugin.setApplicationIconBadgeNumber(0);
    } else {
      window['plugins'].jPushPlugin.setDebugMode(true);
      window['plugins'].jPushPlugin.setStatisticsOpen(true);
    }
    this.jPushAddEventListener();
  }

  private jPushAddEventListener() {
    //判断系统设置中是否允许当前应用推送
    window['plugins'].jPushPlugin.getUserNotificationSettings(result => {
      if (result == 0) {
        console.log('系统设置中已关闭应用推送');
      } else if (result > 0) {
        console.log('系统设置中打开了应用推送');
      }
    });

    //点击通知进入应用程序时会触发的事件
    document.addEventListener("jpush.openNotification", event => {
      let content = this.nativeService.isIos() ? event['aps'].alert : event['alert'];
      console.log("jpush.openNotification" + content);
    }, false);

    //收到通知时会触发该事件
    document.addEventListener("jpush.receiveNotification", event => {
      let content = this.nativeService.isIos() ? event['aps'].alert : event['alert'];
      console.log("jpush.receiveNotification" + content);
    }, false);

    //收到自定义消息时触发这个事件
    document.addEventListener("jpush.receiveMessage", event => {
      let message = this.nativeService.isIos() ? event['content'] : event['message'];
      console.log("jpush.receiveMessage" + message);
    }, false);


    //设置标签/别名回调函数
    document.addEventListener("jpush.setTagsWithAlias", event => {
      console.log("onTagsWithAlias");
      let result = "result code:" + event['resultCode'] + " ";
      result += "tags:" + event['tags'] + " ";
      result += "alias:" + event['alias'] + " ";
      console.log(result);
    }, false);

  }

  //设置标签
  public setTags() {
    if (!this.nativeService.isMobile()) {
      return;
    }
    let tags = this.nativeService.isAndroid() ? ['android'] : ['ios'];
    console.log('设置setTags:' + tags);
    window['plugins'].jPushPlugin.setTags(tags);
  }

  //设置别名,一个用户只有一个别名
  public setAlias(userId) {
    if (!this.nativeService.isMobile()) {
      return;
    }
    console.log('设置setAlias:' + userId);
    //ios设置setAlias有bug,值必须为string类型,不能是number类型
    window['plugins'].jPushPlugin.setAlias('' + userId);
  }

}
