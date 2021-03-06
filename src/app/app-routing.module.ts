import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/dashboard/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewQuestionnaireComponent } from './components/dashboard/questionnaire/new-questionnaire/new-questionnaire.component';
import { StepOneComponent } from './components/dashboard/questionnaire/new-questionnaire/step-one/step-one.component';
import { NewQuestionComponent } from './components/dashboard/questionnaire/new-questionnaire/step-two/new-question/new-question.component';
import { StepTwoComponent } from './components/dashboard/questionnaire/new-questionnaire/step-two/step-two.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaire/questionnaire.component';
import { QuestionnaireeComponent } from './components/dashboard/questionnaire/questionnairee/questionnairee.component';
import { AnswerDetailComponent } from './components/dashboard/questionnaire/statistics/answer-detail/answer-detail.component';
import { StatisticsComponent } from './components/dashboard/questionnaire/statistics/statistics.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { AnswerQuestionComponent } from './components/inicio/questionnaires-list/answer-question/answer-question.component';
import { EnterNameComponent } from './components/inicio/questionnaires-list/enter-name/enter-name.component';
import { QuestionComponent } from './components/inicio/questionnaires-list/question/question.component';
import { QuestionnairesListComponent } from './components/inicio/questionnaires-list/questionnaires-list.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { WelcomeComponent } from './components/inicio/welcome/welcome.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: InicioComponent, children: [
      { path: '', component: WelcomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'questionnairesList', loadChildren: () => import('./components/inicio/questionnaires-list/questionnaires-list.module')
                                                   .then(x => x.QuestionnairesListModule)
      },

    ]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    loadChildren: () => import('./components/dashboard/dashboard.module')
      .then(x => x.DashboardModule)
  },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
