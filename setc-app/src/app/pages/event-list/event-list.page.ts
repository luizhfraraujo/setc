import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EventModel } from "src/app/models/event.model";
import { EventService } from "../../services/event.service";
import { IonItemSliding, ToastController } from "@ionic/angular";
import { EventUtil } from "../../utils/event.util";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.page.html",
  styleUrls: ["./event-list.page.scss"]
})
export class EventListPage implements OnInit {
  events: EventModel[] = [];
  constructor(
    private toastController: ToastController,
    private eventService: EventService,
    private router: Router
  ) {}

  ngOnInit() {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
    });
  }

  goToDetails(id) {
    this.router.navigate(["/event-details", id]);
  }

  async favoriteEvent(event, slidingItem: IonItemSliding) {
    slidingItem.close();
    EventUtil.add(event);
    const toast = await this.toastController.create({
      message: "Evento adicionado aos favoritos",
      duration: 2000
    });
    toast.present();
  }
}
