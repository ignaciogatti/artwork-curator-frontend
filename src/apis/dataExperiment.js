import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:3001/api'
    baseURL: 'https://devstand-dot-artwork-mongodb.rj.r.appspot.com/api'
    //baseURL: 'https://artwork-mongodb.appspot.com/api'
});