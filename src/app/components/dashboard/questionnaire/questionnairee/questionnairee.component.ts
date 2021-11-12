import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnairee',
  templateUrl: './questionnairee.component.html',
  styleUrls: ['./questionnairee.component.css']
})
export class QuestionnaireeComponent implements OnInit {

  questionnaireID: number;
  questionnaire: any = {};
  loading = false;
  
  constructor( private questionnaireService: QuestionnaireService,
               private aRoute: ActivatedRoute) { 
                 this.questionnaireID = +this.aRoute.snapshot.paramMap.get('id');
               }

  ngOnInit(): void {
    this.getQuestionnaire();
  }
  getQuestionnaire(): void{
    this.loading = true;
    this.questionnaireService.getQuestionnaire(this.questionnaireID).subscribe(data=>{
      this.loading = false;
      this.questionnaire = data
      console.log(data);
    })
  }

}
