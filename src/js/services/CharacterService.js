import axios from 'axios';
// import { createCard, getPaginationLayout, isSomeoneChecked } from '../helpers/isRadioChecked';
import { createCard, getPaginationLayout, isRadioChecked } from '../helpers';
import { API_URL, CHARACTER_PATH } from '../constants/api_url';
import { getFilterStatus } from '../helpers';

class CharacterService {
    constructor(characterName) {
        this.characterName = characterName;
        this.characterData = [];
        this.pages = null;
        this.characterCount = null;
    }

    async init() {
        await this.getSingleCharacter();
        this.renderLayout();
        console.log(this.characterData);
    }

    renderLayout() {
        const characterList = document.querySelector('#character-list');
        characterList.classList.add('character-wraper');
        characterList.innerHTML = '';

        const pagination = getPaginationLayout(this.pages, this.fetchNextPage);
        characterList.appendChild(pagination);

        this.characterData.forEach(item => {
            const card = createCard({
                image: item.image,
                name: item.name,
                status: item.status,
                gender: item.gender,
                species: item.species,
                origin: item.origin.name,
            });
            characterList.appendChild(card);
        });
    }

    fetchNextPage = async page => {
        try {
            const data = await axios.get(
                `${API_URL}${CHARACTER_PATH}?name=${this.characterName}&page=${page}`
            );

            const { results } = data.data;
            this.characterData = results;
            this.renderLayout();
        } catch (error) {
            console.log(error);
        }
    };

    async getSingleCharacter() {
        try {
            const radioStatus = await isRadioChecked();
            console.log(radioStatus);
            const character = await axios.get(
                `${API_URL}${CHARACTER_PATH}?name=${this.characterName}${isRadioChecked()}`
            );
            console.log(character);

            const { results, info } = character.data;
            this.characterData = results;
            this.pages = info.pages;
            this.characterCount = info.count;
        } catch (err) {
            console.log(err);
        }
    }
}

export default CharacterService;
