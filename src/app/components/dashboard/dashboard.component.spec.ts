import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { inject } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let allServices: AuthService;
  let toastrService: ToastrService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientTestingModule,ToastrModule.forRoot()
      ],
      declarations: [ DashboardComponent ],
      providers: [{
        provide: AuthService,
        useClass: AuthService
      }]
    })
    .compileComponents();
    allServices = TestBed.inject(AuthService);
    toastrService = TestBed.get(ToastrService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
