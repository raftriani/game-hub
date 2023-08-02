import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '213d225ac1164f4a966fc9f375c7b375'
    }
})