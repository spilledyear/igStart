## 使用手册
*使用 ionic start appName tabs 新建一个 ionic 项目，这样就有了一个项目模板，只需要在此基础上进行修改。

```
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:spilledyear/igStart.git
git push -u origin master

```

### 启动项目
```
ionic serve 
```
以上命令即启动了项目，可在浏览器查看



### 修改配置文件
```
1. 修改 config.xml 配置文件
    主要修改包名、项目名、描述等信息

2. 修改package.json配置文件
    修改包名、项目名、描述等信息
      
3. 修改ionic.config.json配置文件
    修改 app_id
      
```


### 添加依赖
添加自己需要用到的依赖包包就好了，这里举一个例子
- 添加 ts-md5
```
npm install -save ts-md5
```


### 添加插件 ,根据需要安装
以下只是说明第一次安装插件时用到的命令，之后都不需要这样安装，在添加平台的时候会自动安装
```
Dialogs   弹框
ionic cordova plugin add cordova-plugin-dialogs
npm install --save @ionic-native/dialogs

Camera    拍照
ionic cordova plugin add cordova-plugin-camera
npm install --save @ionic-native/camera

File      文件
ionic cordova plugin add cordova-plugin-file
npm install --save @ionic-native/file

File Transfer    文件上传
ionic cordova plugin add cordova-plugin-file-transfer
npm install --save @ionic-native/file-transfer

Toast    poup消息提示
ionic cordova plugin add cordova-plugin-x-toast
npm install --save @ionic-native/toast

App Version    app版本
ionic cordova plugin add cordova-plugin-app-version
npm install --save @ionic-native/app-version

Barcode Scanner   条形码扫描
ionic cordova plugin add phonegap-plugin-barcodescanner
npm install --save @ionic-native/barcode-scanner

Network 
ionic cordova plugin add cordova-plugin-network-information
npm install --save @ionic-native/network

Diagnostic 检查设备的各种xxx GPS、
ionic cordova plugin add cordova.plugins.diagnostic
npm install --save @ionic-native/diagnostic

jpush-phonegap-plugin 极光推送
ionic cordova plugin add jpush-phonegap-plugin --variable APP_KEY=37fd33fe32f499dc8a090618

de.appplant.cordova.plugin.local-notification 本地通知
ionic cordova plugin add de.appplant.cordova.plugin.local-notification
npm install --save @ionic-native/local-notifications


定位
高德定位，不确定 IOS 能不能用
cordova plugin add https://github.com/yanxiaojun617/com.kit.cordova.amaplocation --save
高德定位，不确定 IOS 能不能用
cordova plugin add https://github.com/spilledyear/AMLocation --save


百度定位 cordova-plugin-baidumaplocation，不确定 IOS 能不能用
cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="esNGsqBAbkwjECopBPv9tW62O6U59X72" --variable IOS_KEY="HV55F43HUh9nbwRIDQAsyoR5GE0iOKsV"

高德定位 cordova-plugin-gaode-location，不确定 IOS 能不能用
cordova plugin add https://github.com/spilledyear/cordova-plugin-gaode-location --variable ANDROIDKEY="c278a9609c6d207e7ccdb9de60b7fd63" --variable IOSKEY="1377a38539a5e5bef65ff691a822dec6" --save 

```


### 添加Android平台
```
ionic cordova platform add android
```


### 添加IOS平台
```
ionic cordova platform add ios
```


### 打包Android
```
ionic cordova build android
```


### 打包IOS
```
ionic cordova build ios       //注意，高版本的cordova中不要写成 cordova build ios ，要不然会有问题
一系列繁锁复杂骚的操作，条件有限，具体不清楚，除了费时间还要钱
```


### 真机调试Android
```
手机开启usb调试功能
用数据线将手机和电脑相连接
在ionic 项目根目录执行 cordova run android
```


### 真机调试IOS
```
在xcode里面搞
```

### Ionic CLI
```
ionic g component xxx
ionic g directive xxx
ionic g page xxx
ionic g provider xxx
ionic g pipe xxx
ionic g tabs xxx
```

