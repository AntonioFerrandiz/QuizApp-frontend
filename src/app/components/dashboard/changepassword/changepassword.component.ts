import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changePassword: FormGroup
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router) {
    this.changePassword = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    }, { validator: this.checkPassword })
  }

  ngOnInit(): void {
  }
  checkPassword(group: FormGroup): any {
    const oldPassword = group.controls.newPassword.value;
    const confirmPassword = group.controls.confirmPassword.value;
    return oldPassword === confirmPassword ? null : { notSame: true };
  }
  savePassword(): void {
    console.log(this.changePassword);
    const changePassword: any = {
      oldPassword: this.changePassword.value.oldPassword,
      newPassword: this.changePassword.value.newPassword
    };
    console.log(changePassword);
    this.userService.changePassword(changePassword).subscribe(data =>{
      this.router.navigate(['/dashboard']);
      this.toastr.info(data.message);
    }, error =>{
      this.changePassword.reset();
      this.toastr.error(error.error.message ,'Error');
    })
  }

}
