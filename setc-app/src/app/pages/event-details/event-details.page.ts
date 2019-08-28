import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
  }

  addToFavorites() {
    localStorage.setItem("events", "");
  }

}
