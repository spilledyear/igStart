import {NgModule} from '@angular/core';
import {IonicModule, IonicPageModule} from 'ionic-angular';
import {ExamplePage} from './example';
import {CameraPage} from './camera/camera';
import {LocationPage} from './location/location';

@NgModule({
  declarations: [
    ExamplePage, CameraPage, LocationPage,
  ],
  entryComponents: [
    ExamplePage, CameraPage, LocationPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamplePage),
  ],
  exports: [IonicModule]
})
export class ExamplePageModule {
}
