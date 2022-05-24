import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Coins from './Coins';

const PaginatedItems = ({ itemsPerPage, items, currency }) => {
    const [currentCoins, setCurrentCoins]=useState(null);
    const [pageCount, setPageCount]=useState(0);
    const [itemOffset, setItemOffset]=useState(0);
  
    useEffect(()=> {
      const endOffset=itemOffset + itemsPerPage;
      setCurrentCoins(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }, [itemOffset, itemsPerPage, items]);

    const handlePageClick=(event)=> {
      const newOffset=(event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
        <> 
          <Coins currentCoins={currentCoins} currency={currency}/> 
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
                pageLinkClassName='w-8 h-8 flex-center border-gray-200 border-y-2 odd:border-r-2 even:border-r-2 bg-white'
                previousLinkClassName='w-16 px-2 h-8 flex-center border-y-2 border-x-2 border-gray-200 rounded-l-md bg-white'
                nextLinkClassName='w-14  px-2 h-8 flex-center border-y-2 border-r-2 border-gray-200 rounded-r-md bg-white'
                breakLinkClassName='w-16 h-8 flex-center border-y-2 bg-white border-gray-200 border-r-2'
                activeLinkClassName='bg-gray-200'
                disabledClassName='text-gray-400'
                /> 
            </div>
        </>
      );
}

export default PaginatedItems;