import qs from 'query-string';

const toStringNumber = number => {
    return number.toLocaleString();
}

const getCurrencySymbol = currency => {
    const currencySymbol = {
        'usd': '$',
        'eur': '€',
        'jpy': '¥',
    }

    return currencySymbol[currency]
}


const getQuery = (order = '', currency = '') => {
    const query = {}; 
    if(order) {
        query.order = order;
    }

    if(currency) {
        query.currency = currency;
    }

    return query;
}

const setPage = (search, page) => {
    const queryString = qs.parse(search);
    queryString.page = page;
    console.log(queryString);
    // return `${search ? `${search}&page=${page}` : `?page=${page}` }`;
}

const reverseArray = (array, order) => {
    if(order === 'asc') {
        return array.reverse();
    }

    return array;
}

export {
    toStringNumber,
    getCurrencySymbol,
    getQuery,
    setPage,
    reverseArray
}