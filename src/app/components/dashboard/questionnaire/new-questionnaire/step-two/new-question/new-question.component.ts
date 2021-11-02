import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, Form } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Answer } from 'src/app/models/answer';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion: FormGroup;
  question: Question;
  correctAnswer = 0;
  @Output() sendQuestion = new EventEmitter<Question>();

  constructor(private fb: FormBuilder,
    private toastr: ToastrService) {
    this.newQuestion = this.fb.group({
      question: ['', Validators.required],
      answers: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.addQuestionDefault()
  }
  get getAnswers(): FormArray {
    return this.newQuestion.get('answers') as FormArray;
  }

  addAnswer(): void {
    this.getAnswers.push(this.fb.group({
      description: ['', Validators.required],
      isCorrect: 0,
    }));
  }
  addQuestionDefault(): void {
    for (let i = 0; i < 2; i++) {
      this.addAnswer()
    }
  }

  deleteAnswer(index: number): void {
    if (this.getAnswers.length === 2) {
      this.toastr.error('Como mínimo la pregunta debe contener 2 respuestas', 'Error')
    } else {
      this.getAnswers.removeAt(index);
    }
  }
  setValidAnswer(index: number): void {
    this.correctAnswer = index;
    console.log(this.correctAnswer);
  }
  addQuestion(): void {
    const descriptionQuestion = this.newQuestion.get('question').value;

    const answersArray = this.newQuestion.get('answers').value;

    const ansArray: Answer[] = [];

    answersArray.forEach((element, i) => {
      const answer: Answer = new Answer(element.description, false);
      //console.log(element.isCorrect + ' => ' + i)
      if (element.isCorrect === 1) {
        answer.isCorrect = true;
      }
      ansArray.push(answer);
    });
    const question: Question = new Question(descriptionQuestion, ansArray);
    console.log(question);

    this.sendQuestion.emit(question);
    this.reset();
  }
  reset(): void {
    this.newQuestion.reset();
    this.getAnswers.clear();
    this.addQuestionDefault();
  }
}
