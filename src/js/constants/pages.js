const CHARACTER_LINK_BUTTON = document.querySelector('#character-btn');
const LOCATION_LINK_BUTTON = document.querySelector('#location-btn');
const FAVOURITE_LINK_BUTTON = document.querySelector('#favourite-btn');

const CHARACTER_PAGE = document.querySelector('#character-page');
const LOCATION_PAGE = document.querySelector('#location-page');
const FAVOURITE_PAGE = document.querySelector('#favourite-page');

export const PAGES_ARRAY = [
    { link: CHARACTER_LINK_BUTTON, page: CHARACTER_PAGE, title: 'CHARACTER' },
    { link: LOCATION_LINK_BUTTON, page: LOCATION_PAGE, title: 'LOCATION' },
    { link: FAVOURITE_LINK_BUTTON, page: FAVOURITE_PAGE, title: 'FAVOURITE' },
];
