import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { PhonebookDetail } from '../phonebook-detail';

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {

  private phone_numbers: PhonebookDetail[];
  private phone_detail: PhonebookDetail;

  name: string;
  phonenumber: string;
  address: string;
  link: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPhonebook();
  }

  getPhonebook() {
    this.dataService.getPhonebook().subscribe(phone_numbers => this.phone_numbers = phone_numbers);
  }

  add_number() {
    if (this.name && this.phonenumber) {
      this.phone_detail = new PhonebookDetail();
      this.phone_detail.name = this.name;
      this.phone_detail.phonenumber = this.phonenumber;
      this.phone_detail.address = this.address;
      this.phone_detail.link = this.link;
      this.dataService.addNumber(this.phone_detail).subscribe();

      this.phone_numbers.push(this.phone_detail);

      // window.location.reload();
    }
    this.name = "";
    this.phonenumber = "";
    this.address = "";
    this.link = "";
  }

}
