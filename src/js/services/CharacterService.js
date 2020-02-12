import axios from 'axios';
import { createCard, getPaginationLayout, isRadioChecked } from '../helpers';
import { API_URL, CHARACTER_PATH } from '../constants/api_url';
import { FAVOURITE_CARD_WRAPPER } from '../constants/favourite-wrpper';
class CharacterService {
    constructor(characterName, localStorageService) {
        this.characterName = characterName;
        this.characterData = [];
        this.pages = null;
        this.characterCount = null;
        this.localStorageService = localStorageService;
        this.localStorageKey = '';
    }

    async init(key) {
        this.localStorageKey = key;
        await this.getSingleCharacter();
        this.renderLayout();
    }

    addToLocalStorage(image, name, status, gender, species, origin, id) {
        this.localStorageService.addItem(
            this.localStorageKey,
            image,
            name,
            status,
            gender,
            species,
            origin,
            id
        );
    }

    removeFromLocalStorage(id) {
        this.localStorageService.removeItem(this.localStorageKey, id);
    }

    checkIfItemAddedToLocalStorage(id) {
        return this.localStorageService.checkIfAdded(this.localStorageKey, id);
    }

    renderLayout() {
        const characterPage = document.querySelector('#character-page');
        const characterList = document.querySelector('#character-list');
        characterList.classList.add('character-wrapper');
        characterList.innerHTML = '';

        const pagination = getPaginationLayout(this.pages, this.fetchNextPage);

        this.characterData.forEach(item => {
            const card = createCard({
                image: item.image,
                name: item.name,
                status: item.status,
                gender: item.gender,
                species: item.species,
                origin: item.origin.name,
                id: item.id,
                onClickAdd: (image, name, status, gender, species, origin, id) => {
                    this.addToLocalStorage(image, name, status, gender, species, origin, id);
                },
                onClickRemove: id => {
                    this.removeFromLocalStorage(id);
                },
                checkingEvent: id => {
                    return this.checkIfItemAddedToLocalStorage(id);
                },
            });
            characterList.appendChild(card);
        });

        const paginationWrapper = document.querySelector('#pagination-wrapper');
        if (paginationWrapper) {
            characterPage.removeChild(paginationWrapper);
        }
        characterPage.appendChild(pagination);
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
            const character = await axios.get(
                `${API_URL}${CHARACTER_PATH}?name=${this.characterName}${isRadioChecked()}`
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
