import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPageComponent } from './register-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from '@angular/forms';


describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule,ToastrModule.forRoot(), ReactiveFormsModule],
      declarations: [ RegisterPageComponent ],
      providers: [{
        provide: AuthService,
        useClass: AuthService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should be login form invalid when empty fields', () => {
    expect(component.loginForm.status).toBe('INVALID');
  });

  it('should check login form email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });


  it('should submit user login form', () => {
    component.loginForm.controls['email'].setValue("test@test.com");
    component.loginForm.controls['password'].setValue("12345");
    expect(component.loginForm.status).toBe('VALID');

    // Now we can check to make sure the emitted value is correct
    expect(component.l.email.value).toBe("test@test.com");
    expect(component.l.password.value).toBe("12345");
    

    // Trigger the login function
    component.submitLogin();
  });

  it('should submit register form', () => {
    component.registerForm.controls['email'].setValue("test@test.com");
    component.registerForm.controls['password'].setValue("12345");
    component.registerForm.controls['firstName'].setValue("test");
    component.registerForm.controls['lastName'].setValue("123");

    expect(component.registerForm.status).toBe('VALID');

    // Now we can check to make sure the emitted value is correct
    expect(component.r.email.value).toBe("test@test.com");
    expect(component.r.password.value).toBe("12345");
    expect(component.r.firstName.value).toBe("test");
    expect(component.r.lastName.value).toBe("123");
    

    // Trigger the register function
    component.submitRegisterData();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
