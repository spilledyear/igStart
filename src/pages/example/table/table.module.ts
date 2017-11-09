import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablePage } from './table';
import {DirectivesModule} from "../../../directives/directives.module";
import {PipesModule} from "../../../pipes/pipes.module";

@NgModule({
  declarations: [
    TablePage,
  ],
  imports: [
    IonicPageModule.forChild(TablePage),
    DirectivesModule,       //导入自定义 指令
    PipesModule,            //导入自定义 管道
  ],
})
export class TablePageModule {}
