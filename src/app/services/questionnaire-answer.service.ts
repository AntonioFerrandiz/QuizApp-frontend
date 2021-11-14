import { Injectable } from '@angular/core';
import { Questionnaire } from '../models/questionnaire';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireAnswerService {
  playerName: string;
  questionnaireID: number;
  answers: number[] = [];
  questionnaire: Questionnaire;
  
  constructor() { }
}
