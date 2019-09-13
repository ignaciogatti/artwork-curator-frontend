import axios from 'axios';

export default axios.create({
    baseURL: 'https://art-retrieval-api-234614.appspot.com/'
    //baseURL: 'https://devstandw-dot-art-retrieval-api-234614.appspot.com/'
    //baseURL: 'http://localhost:8000/'
});