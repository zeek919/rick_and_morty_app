const createCard = ({ image, name, status, gender, species, origin }) => {
    const element = document.createElement('div');
    element.classList.add('character-card');

    element.innerHTML = `
    <img src="${image}">
    <p>${name}</p>
    <p>${status}</p>
    <p>${gender}</p>
    <p>${species}</p>
    <p>${origin}</p>`;

    return element;
};

export default createCard;
