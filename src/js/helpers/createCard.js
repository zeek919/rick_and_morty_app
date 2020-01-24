import { localStorageService } from '../constants/localStorageInstace';
const createCard = ({ image, name, status, gender, species, origin, id }) => {
    const element = document.createElement('div');
    element.classList.add('character-card');

    const favouriteSection = document.createElement('div');
    favouriteSection.classList.add('favourite-checkbox');

    const input = document.createElement('input');
    input.type = `checkbox`;
    input.id = `${id}`;

    //WHY IT WORKING ONLY HERE
    localStorageService.favouriteItems.map(function(item) {
        if (item.id == input.id) {
            input.checked = true;
        }
    });

    const label = document.createElement('label');
    label.htmlFor = `${id}`;

    favouriteSection.appendChild(input);
    favouriteSection.appendChild(label);

    input.addEventListener('click', () => {
        if (input.checked === true) {
            localStorageService.addItem({ image, name, status, gender, species, origin, id });
        } else {
            localStorageService.removeItem(id);
        }
    });

    element.innerHTML = `
    <img src="${image}">
    <p>${name}</p>
    <p>${status}</p>
    <p>${gender}</p>
    <p>${species}</p>
    <p>${origin}</p>
    `;
    element.appendChild(favouriteSection);

    return element;
};

export default createCard;
