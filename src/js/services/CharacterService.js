import axios from 'axios';
import { createCard, getPaginationLayout } from '../helpers';
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
        characterList.innerHTML = '';

        this.characterData.forEach(item => {
            const card = createCard({ name: item.name });
            characterList.appendChild(card);
        });

        const pagination = getPaginationLayout(this.pages, this.fetchNextPage);
        characterList.appendChild(pagination);
    }

    fetchNextPage = async page => {
        const API_URL = 'https://rickandmortyapi.com/api';
        const CHARACTER_PATH = '/character';

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
            const API_URL = 'https://rickandmortyapi.com/api';
            const CHARACTER_PATH = '/character';
            const character = await axios.get(
                `${API_URL}${CHARACTER_PATH}?name=${this.characterName}`
            );

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
