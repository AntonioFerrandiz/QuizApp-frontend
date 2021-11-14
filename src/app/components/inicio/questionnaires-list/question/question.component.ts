import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/models/question';
import { QuestionnaireAnswerService } from 'src/app/services/questionnaire-answer.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionnaireID: number;
  questionsList: Question[] = [];
  loading = false;
  answerConfirm = false;
  selectedOption: any;
  style: string;
  index = 0;
  selectedOptionID: number;
  constructor(private answerQuestionnaireService: QuestionnaireAnswerService,
    private questionnareService: QuestionnaireService,
    private router: Router) { }

  ngOnInit(): void {
    this.questionnaireID = this.answerQuestionnaireService.questionnaireID;
    if (this.questionnaireID == null) {
      this.router.navigate(['/welcome']);
      return;
    }
    console.log(this.answerQuestionnaireService.questionnaireID);
    this.getQuestionnaire();
    this.answerQuestionnaireService.answers = [];
  }

  getQuestionnaire(): void {
    this.loading = true;
    this.questionnareService.getQuestionnaire(this.questionnaireID).subscribe(data => {
      console.log(data);
      this.questionsList = data.questionsList;
      this.loading = false;
      this.answerQuestionnaireService.questionnaire = data;
    })
  }
  getQuestion(): string {
    return this.questionsList[this.index].description;
  }
  getIndex(): number {
    return this.index;
  }
  answerSelect(answer: any, answerID: number): void {
    this.selectedOption = answer;
    this.answerConfirm = true;
    this.selectedOptionID = answerID;
  }
  AddClassOption(answer: any): any {
    if (answer === this.selectedOption) {
      this.style = 'active text-light'
      return this.style;
    }
  }
  next(): void{
    this.answerQuestionnaireService.answers.push(this.selectedOptionID);
    this.answerConfirm = false;
    this.index++;
    this.selectedOptionID = null;
    if(this.index === this.questionsList.length){
      this.router.navigate(['welcome/questionnaireAnswer']);
    }
  }
}
