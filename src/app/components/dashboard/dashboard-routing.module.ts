import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { NewQuestionnaireComponent } from './questionnaire/new-questionnaire/new-questionnaire.component';
import { StepOneComponent } from './questionnaire/new-questionnaire/step-one/step-one.component';
import { StepTwoComponent } from './questionnaire/new-questionnaire/step-two/step-two.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireeComponent } from './questionnaire/questionnairee/questionnairee.component';
import { AnswerDetailComponent } from './questionnaire/statistics/answer-detail/answer-detail.component';
import { StatisticsComponent } from './questionnaire/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: QuestionnaireComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: "viewQuestionnaire/:id", component: QuestionnaireeComponent },
      { path: "statistics/:id", component: StatisticsComponent },
      { path: "answerDetail/:id", component: AnswerDetailComponent },
      {
        path: 'newQuestionnaire', component: NewQuestionnaireComponent, children: [
          { path: 'stepOne', component: StepOneComponent },
          { path: 'stepTwo', component: StepTwoComponent },
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
