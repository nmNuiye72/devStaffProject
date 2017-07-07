import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProfileDetail } from './profile-detail';
import { TimelineElement } from './timeline-element';
import { PhonebookDetail } from './phonebook-detail';

@Injectable()
export class DataService {

  private readonly data_host: string = "http://localhost:2403/";
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getTimeline() {
    return this.http.get(this.data_host + 'timeline').map(response => response.json());
  }

  getProfile() {
    return this.http.get(this.data_host + 'profile-detail').map(response => response.json());
  }

  getPhonebook() {
    return this.http.get(this.data_host + 'phonebook').map(response => response.json());
  }

  updateProfile(profile_detail: ProfileDetail) {
    // console.log(profile_detail);
    return this.http.put(this.data_host + 'profile-detail/' + profile_detail.id,
                         JSON.stringify(profile_detail), {headers: this.headers}).map(response => response.json());
  }

  postTimeline(timeline_element: TimelineElement) {
    return this.http.post(this.data_host + 'timeline',
                          JSON.stringify(timeline_element), {headers: this.headers}).map(response => response.json());
  }

  addNumber(number_detail: PhonebookDetail) {
    // console.log(number_object);
    return this.http.post(this.data_host + 'phonebook',
                          JSON.stringify(number_detail), {headers: this.headers}).map(response => response.json());
  }

}
