import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  titleQuestionnaire: string;
  descriptionQuestionnaire: string;
  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {
    this.titleQuestionnaire = this.questionnaireService.titleQuestionnaire;
    this.descriptionQuestionnaire = this.questionnaireService.descriptionQuestionnaire;
  }

}
