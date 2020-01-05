/* eslint-disable no-plusplus */
import { NUMBER_OF_PAGE_WRAPER } from '../constants/numberOfPageWraper';

export const appendNumberOfPages = number => {
    const NUMBER_OF_PAGE_BUTTON = document.createElement('button');
    for (let i = 1; i <= number; i++) {
        NUMBER_OF_PAGE_BUTTON.innerHTML = i;
        NUMBER_OF_PAGE_WRAPER.appendChild(NUMBER_OF_PAGE_BUTTON);
    }
};
