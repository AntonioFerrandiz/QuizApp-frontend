import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePassword: FormGroup
  constructor(private fb: FormBuilder) {
    this.changePassword = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    },{validator: this.checkPassword})
   }

  ngOnInit(): void {
  }
  checkPassword(group: FormGroup): any {
    const oldPassword = group.controls.newPassword.value;
    const confirmPassword = group.controls.confirmPassword.value;
    return oldPassword === confirmPassword ? null : { notSame: true };
  }
  savePassword(): void{
    console.log(this.changePassword)
  }
}
