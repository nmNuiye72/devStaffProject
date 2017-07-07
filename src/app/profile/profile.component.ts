import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { ProfileDetail } from '../profile-detail';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profile_detail: ProfileDetail;

  image: string;
  name: string;
  message: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.profile_detail = new ProfileDetail();
    this.getProfile();
  }

  getProfile() {
    this.dataService.getProfile().subscribe(profile_detail => 
    {
      this.profile_detail = profile_detail[0],
      this.profile_detail.image = '../assets/' + this.profile_detail.image;
    });
  }

  edit_profile() {
    if (this.image)
      this.profile_detail.image = '../assets/' + this.image;
    if (this.name)
      this.profile_detail.name = this.name;
    if (this.message)
      this.profile_detail.message = this.message;
    // console.log(document.getElementById("message").getAttribute("value"));
    // document.getElementById("message").setAttribute("value", "");
    this.dataService.updateProfile(this.profile_detail).subscribe();
    
    this.image = "";
    this.name = "";
    this.message = "";

    // window.location.reload(); // wtf?
  }

}
