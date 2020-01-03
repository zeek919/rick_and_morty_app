export const toggle = (item, nextItem, className, nextClassName) => {
    item.addEventListener('click', () => {
        item.classList.toggle(`${className}`);
    });
    item.addEventListener('click', () => {
        nextItem.classList.toggle(`${nextClassName}`);
    });
};
