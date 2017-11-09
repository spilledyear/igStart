import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { PaginationComponent } from './pagination/pagination';
@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    IonicPageModule.forChild(PaginationComponent)
  ],
  exports: [
    PaginationComponent
  ]
})
export class ComponentsModule {}
