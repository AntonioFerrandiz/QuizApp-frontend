import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { QuestionnaireAnswer } from 'src/app/models/questionnaireAnswer';
import { QuestionnaireAnswerService } from 'src/app/services/questionnaire-answer.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  questionnaireID: number;
  loading = false;
  listQuestionnairesAnswer: Array<any> = [];
  displayedColumns = ['playername', 'date', 'time', 'actions'];
  dataSource = new MatTableDataSource<QuestionnaireAnswer>();
  constructor(private aRoute: ActivatedRoute,
    private questionnaireAnswerService: QuestionnaireAnswerService,
    private toastr: ToastrService) {
    this.questionnaireID = +this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getListQuestionnaireService();
  }

  getListQuestionnaireService(): void {
    this.loading = true;
    this.questionnaireAnswerService.getListQuestionnaireAnswer(this.questionnaireID).subscribe(data => {
      this.loading = false;
      this.listQuestionnairesAnswer = data;
      this.dataSource = data;
      console.log(this.dataSource);
    });
  }
  deleteQuestionnaireAnswer(questionnaireAnswerID: number): void {
    this.loading = true;
    this.questionnaireAnswerService.deleteQuestionnanireAnswer(questionnaireAnswerID).subscribe(data => {
      this.loading = false;
      this.toastr.error('La respuesta al cuestionario fue eliminada con exito.', 'Registro eliminado');
      this.getListQuestionnaireService();
    }, error => {
      this.loading = false;
    })
  }

}
