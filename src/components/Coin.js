import { getCurrencySymbol, toStringNumber } from '../helpers/functions';

const Coin = ({image, name, symbol, currentPrice, priceChange, marketCap, currency}) => {
    
    return (
        <li className='grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 items-center gap-x-3 h-20 px-1 sm:px-4 text-sm lg:text-base'>
            <div className='col-span-2 md:col-span-1 flex justify-center items-center'>
                <img src={image} alt={name} className='w-10 h-10' />
            </div>
            <span className='col-span-2 text-center' >{name}</span>
            <span className='text-center hidden sm:inline sm:col-span-2' >{symbol.toUpperCase()}</span>
            <span className='col-span-2 text-center' >{`${getCurrencySymbol(currency)}${currentPrice > 1 ? toStringNumber(currentPrice) : currentPrice.toFixed(2)}`}</span>
            <span className={`col-span-2 text-center ${priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>{priceChange ? priceChange.toFixed(2) : '-'}%</span>
            <span className='text-center hidden md:inline md:col-span-3' >{`${getCurrencySymbol(currency)}${marketCap > 1 ? toStringNumber(marketCap) : 0}`}</span>
        </li>
    );
};

export default Coin;