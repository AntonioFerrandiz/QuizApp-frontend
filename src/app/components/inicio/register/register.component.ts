import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(private fb: FormBuilder) {
    this.register = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
  }
  registerUser(): void {
    console.log(this.register);
    const user: User = {
      userName: this.register.value.user,
      password: this.register.value.password,
      userEmail: this.register.value.email
    }
    console.log(user)
  }
  checkPassword(group: FormGroup): any {
    const password = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;
    return password === confirmPassword ? null : { notSame: true };
  }
}
