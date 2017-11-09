import {Component, ViewChild} from '@angular/core';
import { Tabs } from 'ionic-angular';
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;

  HomePage = 'HomePage';
  LoginPage = 'LoginPage';
  PersonalPage = 'PersonalPage';
  SegmentsPage = 'SegmentsPage';
  constructor() {

  }
}
