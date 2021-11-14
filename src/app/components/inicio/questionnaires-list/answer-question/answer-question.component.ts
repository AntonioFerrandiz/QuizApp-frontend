import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireAnswerService } from 'src/app/services/questionnaire-answer.service';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {
  questionnaire: Questionnaire;
  userAnswer: number[] = [];
  constructor(private answerQuestionnaireService: QuestionnaireAnswerService,
            private router: Router) { }

  ngOnInit(): void {
    if(this.answerQuestionnaireService.questionnaireID == null){
      this.router.navigate(['/welcome']);
    } else{
      this.questionnaire = this.answerQuestionnaireService.questionnaire;
      this.userAnswer = this.answerQuestionnaireService.answers;
      console.log(this.questionnaire, this.userAnswer);
    }
  }

}
