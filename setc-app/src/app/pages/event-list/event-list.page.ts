import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: EventModel[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    var event = new EventModel();
    event.id = "1";
    event.description = "Teste";
    event.image = "";
    event.speaker = "Teste Speaker";
    event.description = "Teste Description";
    this.events.push(event);
  }

  goToDetails() {
    this.router.navigateByUrl("/event-details")
  }

}
