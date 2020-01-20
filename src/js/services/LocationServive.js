import axios from 'axios';
import { API_URL, LOCATION_PATH } from '../constants/api_url';
import { LOCATION_CARD_WRAPPER, LOCATION_PAGINATION_WRAPPER } from '../constants/location-wrappers';
import { createLocationCard, getPaginationLayout, locationInputValue } from '../helpers';

class LocationService {
    constructor() {
        this.locationName = '';
        this.searchedName = '';
        this.countOfPage = null;
        this.locationElements = [];
    }

    async init(name) {
        this.locationName = name;
        await this.getSingleLocation();
    }

    async getSingleLocation() {
        try {
            const connectWithLocationURL = await axios.get(
                `${API_URL}${LOCATION_PATH}/?name=${this.locationName}`
            );
            this.countOfPage = connectWithLocationURL.data.info.pages;
            this.locationElements = connectWithLocationURL.data.results;
            this.getCardLayout();
        } catch (err) {
            console.log(err);
        }
    }

    getCardLayout() {
        LOCATION_CARD_WRAPPER.innerHTML = '';
        this.locationElements.forEach(item => {
            const singleCard = createLocationCard(item.id, item.dimension, item.name, item.type);
            LOCATION_CARD_WRAPPER.appendChild(singleCard);
        });
        this.setPagination();
    }

    setPagination() {
        LOCATION_PAGINATION_WRAPPER.innerHTML = '';
        const pagination = getPaginationLayout(this.countOfPage, this.getNextPage);
        LOCATION_PAGINATION_WRAPPER.appendChild(pagination);
    }

    getNextPage = async page => {
        try {
            const nextPage = await axios.get(
                `${API_URL}${LOCATION_PATH}/?page=${page}&name=${this.locationName}`
            );
            this.locationElements = nextPage.data.results;
            this.getCardLayout(true);
        } catch (err) {
            console.log(err);
        }
    };
}

export default LocationService;
