import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { TimelineElement } from '../timeline-element';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  private date = new Date();

  message: string;
  select_img: string;

  private timeline: TimelineElement[];
  private timeline_element: TimelineElement;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTimeline();
  }

  getTimeline() {
    this.dataService.getTimeline().subscribe(timeline => {
      this.timeline = timeline.reverse()
      for (var i=0; i<this.timeline.length; i++) {
        if (this.timeline[i].image)
          this.timeline[i].image = '../assets/' + this.timeline[i].image;
      }
    });
  }

  write() {
    if (this.message) {

      this.timeline_element = new TimelineElement();
      this.timeline_element.date = this.date.getDate();
      this.timeline_element.month = this.date.getMonth()+1;
      this.timeline_element.year = this.date.getFullYear();
      this.timeline_element.hour = this.date.getHours();
      this.timeline_element.minute = this.date.getMinutes();
      if (this.select_img)
        this.timeline_element.image = '../assets/' + this.select_img;
      this.timeline_element.message = this.message.split('\n');

      this.dataService.postTimeline(this.timeline_element).subscribe();

      this.timeline.unshift(this.timeline_element);

      // window.location.reload();

    }
    this.message = "";
    this.select_img = "";
  }

}
