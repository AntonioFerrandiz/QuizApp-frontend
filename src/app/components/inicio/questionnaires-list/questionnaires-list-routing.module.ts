import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerQuestionComponent } from './answer-question/answer-question.component';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: 'insertName', component: EnterNameComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'questionnaireAnswer', component: AnswerQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionnairesListRoutingModule { }
