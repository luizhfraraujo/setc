import { Component, OnInit } from "@angular/core";
import { EventModel } from "src/app/models/event.model";
import { Router, ActivatedRoute } from "@angular/router";
import { EventService } from "../../services/event.service";

@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.page.html",
  styleUrls: ["./event-details.page.scss"]
})
export class EventDetailsPage implements OnInit {
  event: EventModel = new EventModel();
  constructor(
    private eventService: EventService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      if (params.id) {
        this.eventService.getEventById(params.id).subscribe((data: any) => {
          this.event = data;
        });
      }
    });
  }

  addToFavorites() {
    localStorage.setItem("events", "");
  }
}
