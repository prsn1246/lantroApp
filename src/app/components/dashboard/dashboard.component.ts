import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userProfile: any;

  constructor( private router: Router,
    public allService: AuthService,
    private toastr: ToastrService) {
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
  }

  ngOnInit(): void {
  }

  //logout
  logOut() {
    localStorage.removeItem('userProfile');
    localStorage.setItem('userAuth','0');
    this.router.navigate(['/']);
    this.toastr.success('Successfully Logged out!')
  }

}
