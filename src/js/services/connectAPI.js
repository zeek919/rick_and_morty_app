// import Axios from 'axios';
const axios = require('axios').default;

export class RequestBuilder {
    static makePages = async () => {
        try {
            const getData = await axios.get('https://rickandmortyapi.com/api/character/');
            const getLengthOfPage = await getData.data.results.length;
            return getLengthOfPage;
        } catch (err) {
            alert(
                'Something went wrong in ./js/services/connectAPI.js RequestBuilder -> makePages()'
            );
        }
    };
}
