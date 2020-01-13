import { TITLE_HEADER } from '../constants/pages';

const pageChanger = array => {
    array.forEach(element => {
        element.link.addEventListener('click', () => {
            array.forEach(item => {
                if (!item.page.classList.contains('invisible')) {
                    item.page.classList.add('invisible');
                }
            });
            TITLE_HEADER.innerHTML = element.title;
            element.page.classList.remove('invisible');
        });
    });
};

export default pageChanger;
