import { FAVOURITE_CARD_WRAPPER } from '../constants/favourite-wrpper';
import { createCard } from '../helpers';
class LocalStorageService {
    constructor() {
        this.favouriteItems = [];
    }

    init() {
        if (window.localStorage.getItem('favouriteLocalStorage')) {
            this.favouriteItems = JSON.parse(window.localStorage.getItem('favouriteLocalStorage'));
            console.log('START - ARRAY IN LOCAL STORAGE');
        }
        this.showCards();
    }

    swapItems() {
        window.localStorage.removeItem('favouriteLocalStorage');
        window.localStorage.setItem('favouriteLocalStorage', JSON.stringify(this.favouriteItems));
    }

    addItem({ image, name, status, gender, species, origin, id }) {
        this.favouriteItems.push({ image, name, status, gender, species, origin, id });
        this.swapItems();
        this.showCards();
    }

    removeItem(id) {
        const tmp = [];
        this.favouriteItems.forEach(item => {
            if (item.id !== id) {
                tmp.push(item);
            }
        });
        this.favouriteItems = tmp;
        this.swapItems();
        this.showCards();
    }

    showCards() {
        FAVOURITE_CARD_WRAPPER.innerHTML = '';
        this.favouriteItems.forEach(item => {
            const card = createCard({
                image: item.image,
                name: item.name,
                status: item.status,
                gender: item.gender,
                species: item.species,
                origin: item.origin.name,
                id: item.id,
            });
            FAVOURITE_CARD_WRAPPER.appendChild(card);
        });
    }
}

export default LocalStorageService;
