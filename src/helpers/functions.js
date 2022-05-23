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
    reverseArray
}