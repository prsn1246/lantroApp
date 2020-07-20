import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  userProfile: any;
  allDevices: any;
  selectedDevices = [];
  featureList: any[];

  constructor( private router: Router,
    public allService: AuthService,
    private toastr: ToastrService) { 
    this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
  }

  ngOnInit(): void {
    this.getAllDevices();
  }

  //logout user
  logOut() {
    localStorage.removeItem('userProfile');
    localStorage.setItem('userAuth','0');
    this.router.navigate(['/']);
    this.toastr.success('Successfully Logged out!')
  }

  //get all devices from json file
  getAllDevices() {
    this.allService.get_all_devices()
    .then((res) => {
      this.allDevices = res['search_results'];
    })
  }

  //update devices features list
  selectedDevice(device, checked) {
    let features = [];
    if(!checked) {
      this.selectedDevices = this.selectedDevices.filter((d) => d.device_id != device.device_id);
    }else{
      let deviceExists = this.selectedDevices.find((d) => d && d.device_id == device.device_id);
      if(!deviceExists) this.selectedDevices.push(device);
    }
    this.selectedDevices.forEach(d => {
      for (let i = 0; i < d.device_cap.length; i++) {
         let f = d.device_cap[i];
         let featureExists = features.find((d) => d && d == f.feature);
         if(!featureExists) features.push(f.feature);
      }
    });
    this.featureList =  features;
  }
}
