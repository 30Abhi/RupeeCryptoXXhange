import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // assuming you're using react-router

const temp = import.meta.env.VITE_API_KEY;

function COINLIST() {
    const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&${temp}`;
    const [AllCoinData, SetAllCoinData] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function

    const getData = async () => {
        try {
            const res = await axios.get(API);
            const data = res.data;
            SetAllCoinData(data);
            console.log(data);
            console.log(typeof data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log(AllCoinData);
        console.log(typeof AllCoinData);
    }, [AllCoinData]);

    // Update the Navigate function to handle navigation correctly
    function handleNavigation(id) {
        navigate(`/coinID/${id}`); // Assuming you have a route for CoinDetail
    }
  
    return (
        <div className="All-Coin-List" style={{ display: 'flex' }}>
            <table border="8" align="center">
                <thead>
                    <tr>
                        <th>market_cap_rank</th>
                        <th>photo</th>
                        <th>name</th>
                        <th>price</th>
                        <th>marketcap</th>
                        <th>price_change_24h</th>
                        <th>price_change_percentage_24h</th>
                    </tr>
                </thead>
                <tbody>
                    {AllCoinData.length > 0 && 
                        AllCoinData.map((element) => (
                            
                            <tr key={element.id} onClick={() => handleNavigation(element.id)}>
                                <td style={{ textAlign: 'center' }}>{element.market_cap_rank}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <img src={element.image} alt="N/A" style={{ height: '20px' }} />
                                </td>
                                <td style={{ textAlign: 'center' }}>{element.name}</td>
                                <td style={{ textAlign: 'center' }}>{element.current_price}</td>
                                <td style={{ textAlign: 'center' }}>{element.market_cap}</td>
                                <td style={{ textAlign: 'center' }}>{element.price_change_24h}</td>
                                <td style={{ textAlign: 'center' }}>
                                    {element.price_change_percentage_24h}
                                </td>
                            </tr>
                           
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default COINLIST;
