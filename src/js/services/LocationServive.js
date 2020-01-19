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
        this.currentLocationElements = [];

        this.temporaryArray = [];
    }

    init() {
        this.setLocationName();
        this.getSingleLocation(true);
    }

    initForCurrentResults() {
        this.setSearchedName();
        this.getSingleLocation(false);
    }

    setLocationName() {
        this.locationName = locationInputValue();
    }

    setSearchedName() {
        this.searchedName = locationInputValue();
        this.filterSearchedArray();
    }

    filterSearchedArray() {
        this.currentLocationElements = [];
        this.locationElements.forEach(item => {
            if (item.name.includes(this.searchedName)) {
                this.currentLocationElements.push(item);
            }
        });
    }

    async getSingleLocation(flag) {
        try {
            const connectWithLocationURL = await axios.get(
                `${API_URL}${LOCATION_PATH}/?name=${this.locationName}`
            );
            this.countOfPage = connectWithLocationURL.data.info.pages;
            this.locationElements = connectWithLocationURL.data.results;
            this.getCardLayout(flag);
        } catch (err) {
            console.log(err);
        }
    }

    getCardLayout(flag) {
        LOCATION_CARD_WRAPPER.innerHTML = '';
        LOCATION_PAGINATION_WRAPPER.innerHTML = '';

        if (flag) {
            this.temporaryArray = this.locationElements;
            this.setPagination();
        } else {
            this.temporaryArray = this.currentLocationElements;
        }

        this.temporaryArray.forEach(item => {
            const singleCard = createLocationCard(item.id, item.dimension, item.name, item.type);
            LOCATION_CARD_WRAPPER.appendChild(singleCard);
        });
    }

    setPagination() {
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
