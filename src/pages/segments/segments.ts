import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the SegmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segments',
  templateUrl: 'segments.html',
})
export class SegmentsPage {

  pet: string = "ducklings";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  doSearch(pageNum) {
    console.log(pageNum);
  }

}
