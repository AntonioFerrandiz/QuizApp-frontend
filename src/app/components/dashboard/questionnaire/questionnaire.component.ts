import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  userName: string;
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getUsername();
  }
  getUsername(): void{
    this.userName = this.loginService.getUsername();
  }
}
