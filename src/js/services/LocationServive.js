import axios from 'axios';
import { API_URL, LOCATION_PATH } from '../constants/api_url';
import { createLocationCard, getPaginationLayout } from '../helpers';

class LocationService {
    constructor(locationName) {
        this.locationName = locationName;
        this.countOfPage = null;
        this.locationElements = [];
    }

    init() {
        this.getSingleLocation();
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
        const locationWrapper = document.querySelector('#location-card-wrapper');
        locationWrapper.innerHTML = '';
        this.locationElements.forEach(item => {
            const singleCard = createLocationCard(item.id, item.dimension, item.name, item.type);
            locationWrapper.appendChild(singleCard);
        });

        const pagination = getPaginationLayout(this.countOfPage, this.getNextPage);
        locationWrapper.appendChild(pagination);
    }

    getNextPage = async page => {
        try {
            const nextPage = await axios.get(
                `${API_URL}${LOCATION_PATH}/?page=${page}&name=${this.locationName}`
            );
            this.locationElements = nextPage.data.results;
            this.getCardLayout();
        } catch (err) {
            console.log(err);
        }
    };
}

export default LocationService;
