import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { AuthService } from 'src/app/services/auth.service';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent
  }
];

@NgModule({
  declarations: [DevicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [{
    provide: AuthService,
    useClass: AuthService
  }]
})
export class DevicesModule { }
