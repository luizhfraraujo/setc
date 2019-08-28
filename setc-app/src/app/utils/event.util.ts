import { EventSavedModel } from "../models/event-saved.model";
import { EventModel } from "../models/event.model";

export class EventUtil {
  public static get(): EventSavedModel {
    // Recupera os dados do LocalStorage
    const data = localStorage.getItem("setc.events_saved");

    // Caso não haja dados, retorna um novo carrinho
    if (!data) return new EventSavedModel();

    // Caso haja dados, retorna o carrinho
    return JSON.parse(data);
  }

  public static add(event: EventModel) {
    // Obtém o carrinho
    let eventsSaved = this.get();

    let item = eventsSaved.events.find(item => item._id === event._id);
    console.log(item);
    if (!item) {
      const item = new EventModel();
      item.description = event.description;
      item._id = event._id;
      item.date = event.date;
      item.startTime = event.startTime;
      item.endTime = event.endTime;
      item.title = event.title;
      item.description = event.description;
      item.image = event.image;
      item.speaker = event.speaker;
      item.type = event.type;

      eventsSaved.events.push(item);
    }

    localStorage.setItem("setc.events_saved", JSON.stringify(eventsSaved));
  }

  public static clear() {
    localStorage.removeItem("setc.events_saved");
  }
}
