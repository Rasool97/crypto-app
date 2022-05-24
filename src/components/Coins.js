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

export default Coins;