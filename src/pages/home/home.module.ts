import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {SearchAddressModule} from "../../shared/search-address/search-address.module";

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    SearchAddressModule
  ],
})
export class HomePageModule {}
