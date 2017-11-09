import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import {IonicStorageModule} from "@ionic/storage";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Dialogs } from '@ionic-native/dialogs';
import { Camera } from '@ionic-native/camera';
import {File} from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import {Toast} from '@ionic-native/toast';
import {Network} from '@ionic-native/network';
import {Diagnostic} from '@ionic-native/diagnostic';
import { LocalNotifications } from '@ionic-native/local-notifications';

import {NativeService} from '../providers/NativeService';
import {StorageService} from '../providers/StorageService';
import { HttpService } from '../providers/HttpService';
import {Utils} from '../providers/Utils';

import { RootApp } from './app.component';
import {ExamplePageModule} from '../pages/example/example.module';



/**
 * IonicModule is an NgModule that bootstraps an Ionic App. By passing a root component,
 * IonicModule will make sure that all of the components, directives, and providers from the framework are imported.
 */

@NgModule({
  declarations: [
    RootApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(RootApp, {
      mode: 'md',         // ios是'ios'
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),     //Ionic Storage，推荐使用
    ExamplePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    RootApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    Camera,
    Toast,
    File,
    FileTransfer,
    Network,
    Diagnostic,
    LocalNotifications,

    NativeService,
    StorageService,
    HttpService,
    Utils,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

