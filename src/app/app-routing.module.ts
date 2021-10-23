import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './components/dashboard/changepassword/changepassword.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaire/questionnaire.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { WelcomeComponent } from './components/inicio/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'welcome', component: InicioComponent, children: [
      { path: '', component: WelcomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ]
  },
  {path: 'dashboard', component:DashboardComponent, children:[
    {path: 'questionnaire', component: QuestionnaireComponent},
    {path: 'changepassword', component: ChangepasswordComponent}
  ]},
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
