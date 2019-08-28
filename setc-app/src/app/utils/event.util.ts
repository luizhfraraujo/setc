import { EventSavedModel } from '../models/event-saved.model';
import { EventModel } from '../models/event.model';

export class EventUtil {
    public static get(): EventSavedModel {
        // Recupera os dados do LocalStorage
        const data = localStorage.getItem("setc.eventsaved");

        // Caso não haja dados, retorna um novo carrinho
        if (!data) return new EventSavedModel();

        // Caso haja dados, retorna o carrinho
        return JSON.parse(data);
    }

    public static add(
        event: EventModel
    ) {
        // Obtém o carrinho
        let eventsSaved = this.get();

        let item = eventsSaved.events.find(item => item.id === event.id);
        if (item) {
            const index = eventsSaved.events.indexOf(item);
            eventsSaved.items[index].quantity += quantity;
        } else {
            // Gera o novo item
            const item = new CartItem(id, product, quantity, price, image);

            // Adiciona ao carrinho
            cart.items.push(item);
        }

        // Salva no localStorage
        localStorage.setItem("sp.cart", JSON.stringify(cart));
    }

    public static update(cart: Cart) {
        // Salva no localStorage
        localStorage.setItem("sp.cart", JSON.stringify(cart));
    }

    public static clear() {
        localStorage.removeItem("sp.cart");
    }
}