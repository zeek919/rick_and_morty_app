/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { debounce } from 'lodash';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { PAGES_ARRAY } from './constants/pages';
import { CHARACTER_FIELD } from './constants/filters';
import { LOCATION_FIELD } from './constants/filters';
import { classToggler } from './utils/classToggler';
import { pageChanger } from './helpers';
import { CharacterService } from './services';
import { LocationService } from './services';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
pageChanger(PAGES_ARRAY);

const submitSearchButton = document.querySelector('#submit-search-btn');
const submitSearchLocationButton = document.querySelector('#submit-search-location-btn');

submitSearchButton.addEventListener('click', async () => {
    const characterService = new CharacterService(CHARACTER_FIELD.value);
    await characterService.init();

    document
        .querySelector('.character-wrapper')
        .scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});

CHARACTER_FIELD.addEventListener('keypress', () => {
    const characterService = new CharacterService(CHARACTER_FIELD.value);

    CHARACTER_FIELD.addEventListener(
        'keypress',
        debounce(characterService.init.bind(characterService), 100)
    );
});

submitSearchLocationButton.addEventListener('click', () => {
    console.log(LOCATION_FIELD.value);
    const locationService = new LocationService(LOCATION_FIELD.value);
    locationService.init();
});
