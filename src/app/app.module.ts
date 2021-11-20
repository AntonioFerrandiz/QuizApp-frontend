import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
// Intereceptos
import { AddTokenInterceptor } from '../app/helpers/add-token.interceptor'
//Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
//Componentes
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { WelcomeComponent } from './components/inicio/welcome/welcome.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChangepasswordComponent } from './components/dashboard/changepassword/changepassword.component';
import { QuestionnaireComponent } from './components/dashboard/questionnaire/questionnaire.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NewQuestionnaireComponent } from './components/dashboard/questionnaire/new-questionnaire/new-questionnaire.component';
import { StepOneComponent } from './components/dashboard/questionnaire/new-questionnaire/step-one/step-one.component';
import { StepTwoComponent } from './components/dashboard/questionnaire/new-questionnaire/step-two/step-two.component';
import { NewQuestionComponent } from './components/dashboard/questionnaire/new-questionnaire/step-two/new-question/new-question.component';
import { EnterNameComponent } from './components/inicio/questionnaires-list/enter-name/enter-name.component';
import { QuestionComponent } from './components/inicio/questionnaires-list/question/question.component';
import { AnswerQuestionComponent } from './components/inicio/questionnaires-list/answer-question/answer-question.component';
import { QuestionnaireeComponent } from './components/dashboard/questionnaire/questionnairee/questionnairee.component';
import { QuestionnairesListComponent } from './components/inicio/questionnaires-list/questionnaires-list.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ChangepasswordComponent,
    QuestionnaireComponent,
    NavbarComponent,
    LoadingComponent,
    NewQuestionnaireComponent,
    StepOneComponent,
    StepTwoComponent,
    NewQuestionComponent,
    EnterNameComponent,
    QuestionComponent,
    AnswerQuestionComponent,
    QuestionnaireeComponent,
    QuestionnairesListComponent,
    EnterNameComponent,
    AnswerQuestionComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatCardModule, MatDividerModule, MatProgressSpinnerModule, MatInputModule, MatListModule, MatFormFieldModule, MatIconModule, MatRadioModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
