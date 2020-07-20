import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { InputValDirective } from 'src/app/directives/input-val.directive';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  showRegisterForm = false;
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(public allService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService) { 

    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
    
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    })
  }

  ngOnInit(): void {
  }

  //show or hide login/register forms
  showForm(){
    this.showRegisterForm = !this.showRegisterForm;
    this.registerForm.reset();
    this.loginForm.reset();
  }

  get l(){
    return this.loginForm.controls;
  }

  get r(){
    return this.registerForm.controls;
  }

  //post login details to api
  submitLogin() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.status == 'VALID') {
      let info = {
        email: this.l.email.value,
        password: this.l.password.value,
      }
      this.allService.authenticate_user_details(info)
      .then((res) => {
        console.log('res...', res);
        if (res['message'].toLowerCase().includes('success')) {
          localStorage.setItem('userAuth', '1');
          this.toastr.success('Login Successfull');
          this.loginForm.reset();
          localStorage.setItem('userProfile', JSON.stringify(res));
          this.router.navigate(['dashboard']);
        }else {
          this.toastr.error('Login Failed!')
        }
      }).catch((err) => {
          // this.toastr.success('Login Successfull');
        console.log('err..', err);
      });
    }
  }

  //post register details to api
  submitRegisterData() {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.status == 'VALID') {
      let info = {
        firstName: this.r.firstName.value,
        lastName: this.r.lastName.value,
        email: this.r.email.value,
        password: this.r.password.value
      }
    this.allService.post_user_details(info)
    .then((res) => {
      if (res && res['message'].toLowerCase().includes('success')) {
        this.toastr.success('Sign up Successfull please Login');
        this.showForm();
        this.registerForm.reset();
      }else {
        this.toastr.error(res['message']);
      }
    })
  }
  }
}

