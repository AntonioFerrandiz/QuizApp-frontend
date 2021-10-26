import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  loading = false;
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService) {
    this.register = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',Validators.required]
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
  }
  registerUser(): void {
    console.log(this.register);
    const user: User = {
      userName: this.register.value.user,
      password: this.register.value.password,
      // userEmail: this.register.value.email
    };
    
    // this.loading=true;
    this.userService.saveUser(user).subscribe(data => {
      console.log(data);
      this.toastr.success(`El usuario ${user.userName} fue registrado con éxito`, 'Usuario registrado');
      this.router.navigate(['/welcome/login'])
      // this.loading = false;
    }, error =>{
      console.log(error);
      if(error.error.message == `El usuario ${user.userName} ya existe`){
        this.toastr.error(error.error.message, 'Error');
      }else if(error.error.errors.Password == 'The Password field is required.'){
        this.toastr.error(error.error.errors.Password, 'Error');
      }
      
      //this.register.reset();

    })
  }
  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : { notSame: true };
  }
}
