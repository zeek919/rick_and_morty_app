class FavouriteService {
    constructor() {
        this.favouriteArray = JSON.parse(window.localStorage.getItem('favouriteLocalStorage'));
    }
}
