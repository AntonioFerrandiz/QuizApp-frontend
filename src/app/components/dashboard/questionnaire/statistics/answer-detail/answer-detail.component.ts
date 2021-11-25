import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireAnswerDetails } from 'src/app/models/questionnaireAnswerDetail';
import { QuestionnaireAnswerService } from 'src/app/services/questionnaire-answer.service';

@Component({
  selector: 'app-answer-detail',
  templateUrl: './answer-detail.component.html',
  styleUrls: ['./answer-detail.component.css']
})
export class AnswerDetailComponent implements OnInit {
  answerID: number;
  loading = false;
  questionnaire: Questionnaire;
  answers: QuestionnaireAnswerDetails[] = [];
  constructor(private aRoute: ActivatedRoute,
     private answerQuestionnaireService: QuestionnaireAnswerService) {
    this.answerID = +this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getAnswerListAndQuestionnaire();
  }
  getAnswerListAndQuestionnaire() {
    this.loading = true;
    this.answerQuestionnaireService.getQuestionnaireByAnswerId(this.answerID).subscribe(data => {
      console.log(data)
      this.questionnaire = data.questionnaire;
      this.answers = data.answers;
      this.loading = false;
    })
  }

}
