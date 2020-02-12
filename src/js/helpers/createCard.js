const createCard = ({
    image,
    name,
    status,
    gender,
    species,
    origin,
    id,
    onClickAdd,
    onClickRemove,
    checkingEvent,
}) => {
    const element = document.createElement('div');
    element.classList.add('character-card');

    const favouriteSection = document.createElement('div');
    favouriteSection.classList.add('favourite-checkbox');

    const input = document.createElement('input');
    input.type = `checkbox`;
    input.id = `${id}`;
    input.checked = checkingEvent(id);

    input.onclick = () => {
        if (input.checked) {
            onClickAdd(image, name, status, gender, species, origin, id);
        } else {
            onClickRemove(id);
        }
    };

    const label = document.createElement('label');
    label.htmlFor = `${id}`;

    favouriteSection.appendChild(input);
    favouriteSection.appendChild(label);

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
