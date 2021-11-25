import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NewQuestionnaireComponent } from './questionnaire/new-questionnaire/new-questionnaire.component';
import { StepOneComponent } from './questionnaire/new-questionnaire/step-one/step-one.component';
import { StepTwoComponent } from './questionnaire/new-questionnaire/step-two/step-two.component';
import { NewQuestionComponent } from './questionnaire/new-questionnaire/step-two/new-question/new-question.component';
import { QuestionnaireeComponent } from './questionnaire/questionnairee/questionnairee.component';
import { StatisticsComponent } from './questionnaire/statistics/statistics.component';
import { AnswerDetailComponent } from './questionnaire/statistics/answer-detail/answer-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ChangepasswordComponent,
    QuestionnaireComponent,
    NewQuestionComponent,
    NewQuestionnaireComponent,
    StepOneComponent,
    StepTwoComponent,
    QuestionnaireComponent,
    StatisticsComponent,
    QuestionnaireeComponent,
    AnswerDetailComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
