import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireAnswerService } from 'src/app/services/questionnaire-answer.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaires-list',
  templateUrl: './questionnaires-list.component.html',
  styleUrls: ['./questionnaires-list.component.css']
})
export class QuestionnairesListComponent implements OnInit {
  loading = false;
  questionnaireList: any[] = [];
  
  constructor(private questionnaireService: QuestionnaireService,
              private router: Router,
              private questionnaireAnswer: QuestionnaireAnswerService) { }

  ngOnInit(): void {
    this.getListQuestionnaire();
  }

  getListQuestionnaire(): void{
    this.loading = true;
    this.questionnaireService.getListQuestionnaires().subscribe(data =>{
      this.loading = false;
      this.questionnaireList = data;
      console.log(data);
    });
  }
  insertName(_questionnaireID: number): void{
    console.log('a');
    this.questionnaireAnswer.questionnaireID = _questionnaireID;
    this.router.navigate(['/welcome/questionnairesList/insertName']);
  }

}
