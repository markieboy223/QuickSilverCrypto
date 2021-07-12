import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './QuickSilverSearch.css'
import Coin from './Coin';
import logo from './../Images/Quicksilver.png'

 function QuickSilverSearch() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => {
                setCoins(res.data);
            })
            .catch(error => alert('Api not available'))
    }, []);

    const handleChange = e => {
    setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )


    return (
    <div className='coin-app'>
        <img src={logo} width={100} alt="logo"/>
        <div className='coin-search'>
        <h1 className='coin-text'>QuickSilverSearch</h1>
        <h2 className='coin-text'>Search for any currency</h2>
        <form>
            <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}></input>
        </form>
        </div>
        {filteredCoins.map (coin => {
        return (
            <Coin key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
            />
        )
        })}
    </div>
    );
}

export default QuickSilverSearch;