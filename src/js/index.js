/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { debounce } from 'lodash';
import { HAMBURGER_BUTTON, NAVIGATION_MENU } from './constants/hamburger';
import { PAGES_ARRAY } from './constants/pages';
import { classToggler } from './utils/classToggler';
import { changePage } from './helpers';
import { CharacterService } from './services';
import { CHARACTER_FIELD } from './constants/filters';

classToggler(HAMBURGER_BUTTON, NAVIGATION_MENU, 'open', 'show');

const submitSearchButton = document.querySelector('#submit-search-btn');

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
