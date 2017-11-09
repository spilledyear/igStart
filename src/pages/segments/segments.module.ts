import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SegmentsPage } from './segments';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    SegmentsPage,
  ],
  imports: [
    IonicPageModule.forChild(SegmentsPage),
    ComponentsModule
  ],
})
export class SegmentsPageModule {}
