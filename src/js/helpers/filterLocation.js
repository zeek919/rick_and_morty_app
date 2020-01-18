const filterLocation = (array, name) => {
    const searchedCardContainer = document.createElement('div');
    searchedCardContainer.classList.add('location-card');

    array.forEach(element => {
        if (element.name.includes(name)) {
            const searchedCard = {
                id: element.id,
                dimension: element.dimension,
                name: element.name,
                type: element.type,
            };

            searchedCardContainer.innerHTML = `
            <p>${searchedCard.id}</p>
            <p>${searchedCard.dimension}</p>
            <p>${searchedCard.name}</p>
            <p>${searchedCard.type}</p>`;

            return searchedCardContainer;
        }
    });
};

export default filterLocation;
