import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionnaireAnswerService } from 'src/app/services/questionnaire-answer.service';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.css']
})
export class EnterNameComponent implements OnInit {

  playerName = ''
  constructor(private router: Router,
              private answerQuestionnaire: QuestionnaireAnswerService) { }

  ngOnInit(): void {
    if(this.answerQuestionnaire.questionnaireID == null){
      this.router.navigate(['/welcome']);
    }
  }
  next(): void{
    this.answerQuestionnaire.playerName = this.playerName;
    this.router.navigate(['/welcome/questionnairesList/question']);
  }

}
