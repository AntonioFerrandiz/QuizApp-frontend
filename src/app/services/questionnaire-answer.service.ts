import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questionnaire } from '../models/questionnaire';
import { QuestionnaireAnswer } from '../models/questionnaireAnswer';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireAnswerService {
  myAppUrl: string;
  myApiUrl: string;

  playerName: string;
  questionnaireID: number;
  answers: number[] = [];
  questionnaire: Questionnaire;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = '/api/QuestionnaireAnswer/'
  }
  saveQuestionnaireAnswer(questionnaireAnswer: QuestionnaireAnswer): Observable<any>{
    console.log('hola => ',questionnaireAnswer);
    return this.http.post(this.myAppUrl + this.myApiUrl, questionnaireAnswer)
  }
  getListQuestionnaireAnswer(questionnaireID: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + questionnaireID);
  }
  deleteQuestionnanireAnswer(questionnaireAnswerID: number): Observable<any>{
    return this.http.delete(this.myAppUrl + this.myApiUrl + questionnaireAnswerID);
  }
}
