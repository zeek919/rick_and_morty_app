class LocalStorageService {
    constructor(favouriteService) {
        this.database = {};
        this.favouriteService = favouriteService;
    }

    init(key) {
        this.database[key] = [];
        if (window.localStorage.getItem(key)) {
            const a = window.localStorage.getItem(key);
            this.database[key] = JSON.parse(a);
        }
        this.favouriteService.checkCard(this.database);
    }

    swapArray(key) {
        window.localStorage.removeItem(key);
        window.localStorage.setItem(key, JSON.stringify(this.database[key]));
    }

    checkIfAdded(key, id) {
        const itemList = this.database[key];
        return itemList.find(item => item.id === id);
    }

    addItem(key, image, name, status, gender, species, origin, id) {
        this.database[key].push({ image, name, status, gender, species, origin, id });
        this.swapArray(key);
        this.favouriteService.checkCard(this.database);
    }

    removeItem(key, id) {
        const filtered = this.database[key].filter(item => item.id !== id);
        this.database[key] = filtered;
        this.swapArray(key);
        this.favouriteService.checkCard(this.database);
    }
}
export default LocalStorageService;
