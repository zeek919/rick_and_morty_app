import { FAVOURITE_CARD_WRAPPER } from '../constants/favourite-wrpper';
import { createCard } from '../helpers';

class FavouriteService {
    constructor() {
        this.database = [];
    }

    init(database) {
        this.database = database;
        this.checkCard();
    }

    returnDatabase() {
        return this.database;
    }

    swapArrays() {
        window.localStorage.removeItem('favourite');
        window.localStorage.setItem('favourite', JSON.stringify(this.database));
    }

    removeItem(id) {
        const filtered = this.database.filter(item => item.id !== id);
        this.database = filtered;
        this.swapArrays();
        this.checkCard();
    }

    checkCard() {
        FAVOURITE_CARD_WRAPPER.innerHTML = '';
        this.database.forEach(item => {
            const card = createCard({
                image: item.image,
                name: item.name,
                status: item.status,
                gender: item.gender,
                species: item.species,
                origin: item.origin.name,
                id: item.id,
                onClickRemove: id => {
                    this.removeItem(id);
                },
                checkingEvent: () => {
                    return true;
                },
            });
            FAVOURITE_CARD_WRAPPER.appendChild(card);
        });
    }
}

export default FavouriteService;
