import { Injectable } from "@angular/core";
import { EventModel } from "../models/event.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class EventService {
  events: EventModel[] = [];
  constructor(private http: HttpClient) {}

  public getEvents() {
    return this.http.get("http://localhost:3000/events");
  }

  public getEventById(id) {
    return this.http.get(`http://localhost:3000/events/${id}`);
  }

  public getStaticData() {
    let event = new EventModel();
    event._id = "1";
    event.date = "26/08/2019";
    event.startTime = "12:00";
    event.endTime = "16:00";
    event.title = "Credenciamento";
    event.description = "";
    event.speaker = "";
    event.image = "";
    event.type = "outros";
    this.events.push(event);

    event = new EventModel();
    event.date = "26/08/2019";
    event.startTime = "18:00";
    event.endTime = "19:00";
    event.title = "Abertura";
    event.description = "";
    event.speaker = "";
    event.image = "";
    event.type = "outros";
    this.events.push(event);

    event = new EventModel();
    event.date = "26/08/2019";
    event.startTime = "19:00";
    event.endTime = "20:30";
    event.title = "4G; LTE-A e a caminhada para o 5G";
    event.description = "";
    event.speaker = "Itagildo Edmar Garbazza";
    event.image = "itagildogarbazza.jpg";
    event.type = "palestra";
    this.events.push(event);

    event = new EventModel();
    event.date = "26/08/2019";
    event.startTime = "20:30";
    event.endTime = "22:00";
    event.title =
      "F(x) é Exponencial: A Trajetória de Programadores Acadêmicos";
    event.description = "";
    event.speaker = "Moisés Henrique Ramos Pereira";
    event.image = "moiseshenrique.jpeg";
    event.type = "palestra";
    this.events.push(event);

    event = new EventModel();
    event.date = "27/08/2019";
    event.startTime = "07:00";
    event.endTime = "11:00";
    event.title = "Campeonato Counter Strike: GO";
    event.description = "";
    event.speaker = "";
    event.image = "csgo.jpeg";
    event.type = "campeonato";
    this.events.push(event);

    event = new EventModel();
    event.date = "27/08/2019";
    event.startTime = "13:00";
    event.endTime = "17:00";
    event.title = "React";
    event.description =
      "O desenvolvimento de sistemas e aplicativos está em constante evolução, e nesse minicurso desejá-se abordar a utilização de componentes do React, uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces de usuário (UI).";
    event.speaker = "André Laurentino Rodrigues";
    event.image = "minicurso.jpg";
    event.type = "minicurso";
    this.events.push(event);

    return this.events;
  }
}
