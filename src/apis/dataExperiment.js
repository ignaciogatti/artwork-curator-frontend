import axios from 'axios';

export default axios.create({
    baseURL: 'https://artwork-mongodb.appspot.com/api'
});