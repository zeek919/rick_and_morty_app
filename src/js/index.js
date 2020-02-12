/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { debounce } from 'lodash';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { PAGES_ARRAY } from './constants/pages';
import { CHARACTER_FIELD, LOCATION_FIELD } from './constants/filters';

import { classToggler } from './utils/classToggler';
import { pageChanger } from './helpers';
import {
    CharacterService,
    LocationService,
    LocalStorageService,
    FavouriteService,
} from './services';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
pageChanger(PAGES_ARRAY);

const submitSearchButton = document.querySelector('#submit-search-btn');
const submitSearchLocationButton = document.querySelector('#submit-search-location-btn');

const favouriteService = new FavouriteService();
const localStorageService = new LocalStorageService(favouriteService);

submitSearchButton.addEventListener('click', async () => {
    const characterService = new CharacterService(CHARACTER_FIELD.value, localStorageService);
    await characterService.init('favourite');

    document
        .querySelector('.character-wrapper')
        .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});

submitSearchButton.click();

const searchByName = async () => {
    const characterService = new CharacterService(CHARACTER_FIELD.value, localStorageService);
    await characterService.init('favourite');
};

localStorageService.init('favourite');
CHARACTER_FIELD.addEventListener('keypress', debounce(searchByName, 500));

const locationService = new LocationService();

submitSearchLocationButton.addEventListener('click', () => {
    locationService.init(LOCATION_FIELD.value);
});
