import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionPage } from './question';
import {SingleQuestionPageModule} from "../../shared/single-question/single-question.module";

@NgModule({
  declarations: [
    QuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionPage),
    SingleQuestionPageModule
  ],
})
export class QuestionPageModule {}
