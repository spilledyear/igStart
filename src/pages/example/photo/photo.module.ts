import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoPage } from './photo';

@NgModule({
  declarations: [
    PhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoPage),
  ],
})
export class PhotoPageModule {}
