import { FAVOURITE_CARD_WRAPPER } from '../constants/favourite-wrpper';
import { createCard } from '../helpers';

class FavouriteService {
    // eslint-disable-next-line class-methods-use-this
    checkCard(database) {
        FAVOURITE_CARD_WRAPPER.innerHTML = '';
        database.favourite.forEach(item => {
            const card = createCard({
                image: item.image,
                name: item.name,
                status: item.status,
                gender: item.gender,
                species: item.species,
                origin: item.origin.name,
                id: item.id,
                checkingEvent: () => {
                    return true;
                },
            });
            FAVOURITE_CARD_WRAPPER.appendChild(card);
        });
    }
}

export default FavouriteService;
