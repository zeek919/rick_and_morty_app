/* eslint-disable no-plusplus */

const getPaginationLayout = (number, onClick) => {
    const wrapper = document.createElement('div');

    for (let i = 1; i <= number; i++) {
        const button = document.createElement('button');

        button.innerHTML = i;
        button.onclick = () => onClick(i);
        wrapper.appendChild(button);
    }

    return wrapper;
};

export default getPaginationLayout;
