import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'auth',  pathMatch: 'full'},
  { path: 'auth', component: RegisterPageComponent},
  { path: 'dashboard', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { path: 'devices', 
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/devices/devices.module').then(m => m.DevicesModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
