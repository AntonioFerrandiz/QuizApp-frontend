import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnairesListRoutingModule } from './questionnaires-list-routing.module';

import { EnterNameComponent } from './enter-name/enter-name.component';
import { QuestionComponent } from './question/question.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    EnterNameComponent,
    QuestionComponent,
    AnswerQuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionnairesListRoutingModule,
    SharedModule
  ]
})
export class QuestionnairesListModule { }
