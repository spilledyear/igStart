import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  questions: Array<Object> = [{serial:10001, content:'你喜不喜欢你花草？'},{serial:10002, content: '你喜不喜欢你动物？'}];

  answers: Array<{serial: number, answer: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  radioClick(answer){
    let pushFlag = true;
    this.answers.map((item)=>{
      if(item.serial === answer.serial){
        pushFlag = false;
        return;
      }
    });

    if(pushFlag) this.answers.push(answer);
  }

  submit(){
    console.log(this.answers);
  }

}
