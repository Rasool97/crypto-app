import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Coin from "./Coin";

const Coins = ({currentCoins, currency })=> {

    return (
      currentCoins !== null && currentCoins.length !== 0 && (
        <ul className='flex flex-col bg-white border-2 border-gray-200 divide-y-2 divide-gray-200 rounded-md'> 
            <li className="text-blue-600 font-medium grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 items-center gap-x-3 h-12 px-1 sm:px-4 text-sm lg:text-base"> 
              <span className="text-center col-span-2 md:col-span-1">#</span> 
              <span className="text-center col-span-2">Name</span> 
              <span className="text-center hidden sm:inline sm:col-span-2">Symbol</span> 
              <span className="text-center col-span-2">Price</span> 
              <span className="text-center col-span-2">24h</span> 
              <span className="text-center hidden md:inline md:col-span-3">Mkt Cap</span> 
            </li>
            {currentCoins.map((coin)=> (
                <Coin 
                  key={coin.id}
                  image={coin.image}
                  name={coin.name}
                  symbol={coin.symbol}
                  currency={currency}
                  currentPrice={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  marketCap={coin.market_cap}
                  />))}
        </ul>)
      );            
};

const PaginatedItems = ({ itemsPerPage, items, currency }) => {
    const [currentCoins, setCurrentCoins]=useState(null);
    const [pageCount, setPageCount]=useState(0);
    const [itemOffset, setItemOffset]=useState(0);
  
    useEffect(()=> {
      const endOffset=itemOffset + itemsPerPage;
      setCurrentCoins(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick=(event)=> {
      const newOffset=(event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
        <> 
          <Coins currentCoins={ currentCoins} currency={currency}/> 
            <div className='flex items-center justify-center w-full'> 
              <ReactPaginate 
                previousLabel="previous"
                breakLabel="..."
                nextLabel='next'
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                className='flex flex-wrap text-xs font-medium text-gray-700'
                pageClassName='w-10 h-8 flex-center border-gray-200 border-y-2 odd:border-r-2 even:border-r-2 bg-white'
                previousClassName='w-16 px-2 h-8 flex-center border-y-2 border-x-2 border-gray-200 rounded-l-md bg-white'
                nextClassName='w-16  px-2 h-8 flex-center border-y-2 border-r-2 border-gray-200 rounded-r-md bg-white'
                breakClassName='w-20 h-8 flex-center border-y-2 bg-white border-gray-200 border-r-2'
                activeClassName='bg-gray-200'
                disabledClassName='text-gray-400'
                /> 
            </div>
        </>
      );
}

export default PaginatedItems;