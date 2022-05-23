import axios from 'axios';

axios.defaults.baseURL = 'https://api.coingecko.com/api/v3';

// https://api.coingecko.com/api/v3/search?query=bitcoin

const getCoin = async (currency) => {
    try {
        const response = await axios.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export {
    getCoin,
}