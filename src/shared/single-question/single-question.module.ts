import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleQuestionPage } from './single-question';

@NgModule({
  declarations: [
    SingleQuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleQuestionPage),
  ],
  exports: [
    SingleQuestionPage
  ]
})
export class SingleQuestionPageModule {}
