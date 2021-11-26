import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionnaireService } from 'src/app/services/questionnaire.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  dataQuestionnaire: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private questionnaireService: QuestionnaireService) {
      this.dataQuestionnaire = this.fb.group({
        title: ['',[Validators.required]],
        description: ['', [Validators.required]]
      })
     }

  ngOnInit(): void {
  }
  stepOne():void{
    this.questionnaireService.titleQuestionnaire = this.dataQuestionnaire.value.title;
    this.questionnaireService.descriptionQuestionnaire = this.dataQuestionnaire.value.description;
    this.router.navigate(['/dashboard/newQuestionnaire/stepTwo']);
  }
}
