/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { PAGES_ARRAY } from './constants/pages';
import { classToggler } from './utils/classToggler';
import { changePage } from './helpers';
import { CharacterService } from './services';
import { CHARACTER_FIELD } from './constants/filters';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');
// changePage(PAGES_ARRAY);

const submitSearchButton = document.querySelector('#submit-search-btn');

submitSearchButton.addEventListener('click', () => {
    const characterService = new CharacterService(CHARACTER_FIELD.value);
    characterService.init();
});
