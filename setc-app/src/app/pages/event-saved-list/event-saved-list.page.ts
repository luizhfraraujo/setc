import { Component, OnInit } from "@angular/core";
import { EventModel } from "../../models/event.model";
import { EventUtil } from "../../utils/event.util";
import { EventSavedModel } from "../../models/event-saved.model";

@Component({
  selector: "app-event-saved-list",
  templateUrl: "./event-saved-list.page.html",
  styleUrls: ["./event-saved-list.page.scss"]
})
export class EventSavedListPage implements OnInit {
  eventSaved: EventSavedModel;
  constructor() {}

  ngOnInit() {
    this.eventSaved = EventUtil.get();
  }
}
