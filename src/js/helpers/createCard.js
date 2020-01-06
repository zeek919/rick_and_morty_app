const createCard = ({ name, status }) => {
    const element = document.createElement('div');

    element.innerHTML = name;

    return element;
};

export default createCard;
