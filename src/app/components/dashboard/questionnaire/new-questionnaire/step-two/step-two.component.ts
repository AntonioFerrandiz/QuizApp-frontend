import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/models/question';
import { Questionnaire } from 'src/app/models/questionnaire';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  titleQuestionnaire: string;
  descriptionQuestionnaire: string;
  listQuestions: Question[] = [];
  constructor(private questionnaireService: QuestionnaireService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.titleQuestionnaire = this.questionnaireService.titleQuestionnaire;
    this.descriptionQuestionnaire = this.questionnaireService.descriptionQuestionnaire;
  }
  saveQuestion(question: Question): void {
    this.listQuestions.push(question);
    console.log(this.listQuestions);
  }
  deleteQuestion(index: number): void {
    this.listQuestions.splice(index, 1);
  }
  saveQuestionnaire(): void {
    const questionnaire: Questionnaire = {
      name: this.titleQuestionnaire,
      description: this.descriptionQuestionnaire,
      questionsList: this.listQuestions
    };
    this.questionnaireService.saveQuestionnaire(questionnaire).subscribe(data =>{
      this.toastr.success('El cuuestionario fue registrado con éxito', 'Cuestionario registrado');
      this.router.navigate(['/dashboard']);
    }, error =>{
      this.toastr.error('Opps... Ocurrió un error', 'Error');
      this.router.navigate(['/dashboard']);
    })
  }
}
