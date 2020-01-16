import { debounce } from 'lodash';
import { PAGES_ARRAY } from '../constants/pages';
import { CHARACTER_FIELD } from '../constants/filters';
import { CharacterService } from '../services';

const submitSearchButton = document.querySelector('#submit-search-btn');

const whichPageOpen = () => {
    if (!PAGES_ARRAY[0].page.classList.contains('invisible')) {
        console.log('asdasdad');
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
    }
};

export default whichPageOpen;
