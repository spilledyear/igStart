import {Component, EventEmitter, Input, Output} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-single-question',
  templateUrl: 'single-question.html',
})
export class SingleQuestionPage {

  @Input() serial: number;                              //序号，作为问题的唯一标识

  @Input() content: string;                             //问题内容

  @Output() radioClick = new EventEmitter<any>();          //输出事件

  answer: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleQuestionPage');
  }


  ionChange(value){
    this.answer = value;
    let answerMap = {serial: this.serial, answer: this.answer};
    this.radioClick.emit(answerMap);
  }

}
