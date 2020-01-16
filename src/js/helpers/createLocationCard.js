const createLocationCard = (id, dimension, name, type) => {
    const element = document.createElement('div');
    element.classList.add('location-card');

    element.innerHTML = `
    <p>${id}</p>
    <p>${dimension}</p>
    <p>${name}</p>
    <p>${type}</p>`;

    return element;
};
export default createLocationCard;
