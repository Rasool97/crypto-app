// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import qs from 'query-string';
// import { setPage } from '../helpers/functions';

// const Pagintion = () => {
//     const location = useLocation();
//     const queryString = qs.parse(location.search)
//     const {page} = queryString;
   

//     return (
//         <div className='w-full flex items-center justify-center gap-x-4'>
//             <Link to={setPage(location.search, 1)} className='flex items-center justify-center text-lg font-medium bg-blue-600 text-white w-10 h-10 rounded-sm'>1</Link>
//             <Link className='flex items-center justify-center text-lg font-medium bg-blue-600 text-white w-10 h-10 rounded-sm'>2</Link>
//             <Link className='flex items-center justify-center text-lg font-medium bg-blue-600 text-white w-10 h-10 rounded-sm'>3</Link>
//             <Link className='flex items-center justify-center text-lg font-medium bg-blue-600 text-white w-10 h-10 rounded-sm'>4</Link>
//             <span className='flex items-center justify-center text-lg font-medium bg-blue-600 text-white w-10 h-10 rounded-sm'>...</span>
//             <Link to={setPage(location.search, 75)} className='flex items-center justify-center text-lg font-medium bg-blue-600 text-white w-10 h-10 rounded-sm'>75</Link>
//         </div>
//     );
// };

// export default Pagintion;

