/* eslint-disable no-plusplus */

const getPaginationLayout = (number, onClick) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('pagination-wrapper');

    for (let i = 1; i <= number; i++) {
        const button = document.createElement('button');

        button.innerHTML = i;
        button.classList.add('pagination-button');
        button.onclick = () => onClick(i);
        wrapper.appendChild(button);
    }

    return wrapper;
};

export default getPaginationLayout;
