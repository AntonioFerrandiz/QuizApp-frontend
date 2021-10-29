import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../models/user'
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  login: FormGroup;
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginService) {
    this.login = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  log(): void {
    console.log(this.login);

    const user: User = {
      userName: this.login.value.user,
      password: this.login.value.password,
      // userEmail: ''
    }
    this.loading = true;
    this.loginService.login(user).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.loginService.setLocalStorage(data.token);
      this.router.navigate(['/dashboard'])
    }, error => {
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    })
    // setTimeout(()=>{
    //   console.log(user)
    //   if(user.userName === 'antonio' && user.password === 'admin'){
    //     this.router.navigate(['/dashboard/questionnaire'])
    //     this.login.reset();
    //   }else{
    //     this.toastr.error('Usuario o contraseña incorrecto', 'Error');
    //     this.login.reset();
    //   }
    //   this.loading = false;
    // },1500)
  }

}
