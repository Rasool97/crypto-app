const SearchBox = ({onChange, search, order, currency}) => {

    return (
        <div className='bg-white border-2 border-gray-200 p-4 rounded-md'>
            <form className='flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row justify-between gap-x-4 lg:gap-x-16'>
               <div className='basis-2/3 flex items-center'>
                    <input type="search" name="search"  placeholder='Search' onChange={onChange} value={search} className='bg-gray-100 w-full text-sm md:text-lg text-gray-800 border border-gray-200 rounded-md h-8 sm:h-11 px-2 sm:px-4 focus:outline-none' />
               </div>

               <div className='text-xs md:text-base basis-1/3 flex flex-row justify-between sm:flex-col gap-y-2 items-start sm:items-end'>              
                    <div className='flex gap-x-1 sm:gap-x-2 items-center'>
                        <label htmlFor="order" className='text-blue-600'>Order </label>
                        <select name="order" onChange={onChange} value={order} className='bg-gray-100 w-[4rem] sm:w-28 lg:w-36 px-1 py-1 sm:px-3 sm:py-2 focus:outline-none border border-gray-200 rounded-sm'>
                            <option value="desc">Desc</option>
                            <option value="asc">Asc</option>
                        </select>
                    </div>
    
                    <div className='flex gap-x-1 sm:gap-x-2 items-center'>
                        <label htmlFor="currency" className='text-blue-600'>Currency </label>
                        <select name="currency" onChange={onChange} value={currency} className='bg-gray-100 w-[4rem] sm:w-28 lg:w-36 px-1 py-1 sm:px-3 sm:py-2 focus:outline-none border border-gray-200 rounded-sm'>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="jpy">JPY</option>
                        </select>
                    </div>
                </div>
            </form>
             
        </div> 
    );
};

// query
// ?search=steak&order=desc&currency=usd

export default SearchBox;