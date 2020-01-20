const createCard = ({ image, name, status, gender, species, origin, id }) => {
    const element = document.createElement('div');
    element.classList.add('character-card');

    element.innerHTML = `
    <img src="${image}">
    <p>${name}</p>
    <p>${status}</p>
    <p>${gender}</p>
    <p>${species}</p>
    <p>${origin}</p>
    <div class="favourite-checkbox">
    <input type="checkbox" id="${id}">
    <label for="${id}"></label>
    </div>
   `;

    return element;
};

export default createCard;
