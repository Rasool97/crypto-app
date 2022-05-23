import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'query-string';
import Loading from '../components/Loading';
import SearchBox from '../components/SearchBox';
import { getQuery, reverseArray } from '../helpers/functions';
import { getCoin } from '../services/api';
import PaginatedItems from '../components/Coins';

const Home = () => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        search: '',
        order: 'desc',
        currency: 'usd',
    });

    const history = useHistory();
    const location = useLocation();

    const changeHandler = event => {
        if(event.target.name === 'search') {
            setData(prevData => ({
                ...prevData,
                search: event.target.value,
            }))

        } else {
            setData(prevData => ({
                ...prevData,
                [event.target.name]: event.target.value
            }))
        }

        if(event.target.name === 'order') {
            const query = getQuery(event.target.value, data.currency);
            history.push({search: qs.stringify(query)});
        }

        if(event.target.name === 'currency') {
            const query = getQuery(data.order, event.target.value);
            history.push({search: qs.stringify(query)});
        }
    }

    useEffect(() => {
        const queryString = qs.parse(location.search);

        if(queryString.currency && queryString.order) {
            setData(prevData => ({
                ...prevData,
                currency: queryString.currency,
                order: queryString.order,
            }))
        }

        if(queryString.page) {
            setData(prevData => ({
                ...prevData,
                page: queryString.page,
            }))
        }

        setIsLoading(true);

        const fetchAPI = async () => {
            try {
                const coinsData = await getCoin(data.currency);   
                setCoins(reverseArray(coinsData, data.order));
                setIsLoading(false);
                
            } catch(error) {
                setError(true);
                setIsLoading(false);
            }
        }

        fetchAPI();
    }, [data.currency, location.search, data.order])

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(data.search.toLowerCase()));

    return (
        <main className='bg-gray-100 w-full min-h-screen'>
            <div className='container py-10 px-3 sm:px-12 lg:px-20 flex flex-col gap-y-4 md:gap-y-6'>
                <SearchBox 
                    onChange={changeHandler}
                    search={data.search} 
                    order={data.order} 
                    currency={data.currency} />
                {isLoading ? <Loading /> : (
                    <PaginatedItems  itemsPerPage={25} items={searchedCoins} currency={data.currency} />
                )}
                {!isLoading && searchedCoins.length === 0 && !error && (
                    <div className='flex-center'>
                        <p className='text-xl text gray-700 font-medium'>Oops, there is nothing to show!</p>
                    </div>
                )}
                {error && (
                    <div className='flex-center'>
                        <p className='text-xl text gray-700 font-medium'>Oops, somethin went wrong!</p>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Home;