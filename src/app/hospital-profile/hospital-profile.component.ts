import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.css']
})
export class HospitalProfileComponent implements OnInit {
  profile: any;
  constructor() { }

  ngOnInit() {
    this.profile = {
      name: '',
      addressLine1: '',
      addressLine2: '',
      zipcode: '',
      city: '',
      state: '',
      country: '',
      aboutHospital: ''
    };
  }

  submitDetails() {
    console.log(this.profile);
  }
}
