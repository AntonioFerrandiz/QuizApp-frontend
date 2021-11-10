import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Questionnaire } from 'src/app/models/questionnaire';
import { LoginService } from 'src/app/services/login.service';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  userName: string;
  questionnaireList: Questionnaire[] = [];
  loading = false;
  constructor(private loginService: LoginService,
    private questionnaireService: QuestionnaireService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUsername();
    this.getQuestionnaires();
  }
  getUsername(): void {
    this.userName = this.loginService.getTokenDecoded().sub;
  }
  getQuestionnaires(): void {
    this.loading = true;
    this.questionnaireService.getQuestionnaireList().subscribe(data => {
      this.questionnaireList = data;
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error);
    });
  }
  deleteQuestionnaire(questionnaireID: number): void{
    if(confirm('Esta seguro que desea eliminar el questionnaire?')){
      this.loading = true;
      this.questionnaireService.deleteQuestionnaire(questionnaireID).subscribe(data =>{
        this.toastr.success('El cuestionario fue eliminado con exito', 'Registro eliminado');
        this.getQuestionnaires();
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
        this.toastr.error('Opss... ocurrió un error al tratar de eliminar el cuestionario.');
      });
    }
  }
}
