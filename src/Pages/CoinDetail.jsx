import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams for routing
import CoinChart from "../Components/CoinChart";
import NavBarDefault from "../Components/NavBarDefault";

// Example temp variable for your API key
const temp = import.meta.env.VITE_API_KEY;

function CoinDetail() {
    const { id } = useParams(); // Access the coin's ID from the URL params
    const [detail, setDetail] = useState({});
    const [chartData, setChartData] = useState(null); // Example to handle chart data

    // Create the Detail_API dynamically based on the coin id
    const Detail_API = `https://api.coingecko.com/api/v3/coins/${id}?vs_currency=usd&days=30`;

    const getData = async () => {
        try {
            const response = await axios.get(Detail_API);
            console.log("DETAILS OF THE COIN");
            console.log("coind with id response")
            console.log(response);
            setDetail(response.data); // Update state with the coin's details
            console.log(detail)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
           getData(); // Fetch data only if id exists
        
    }, [id]); // Re-run if id changes (like navigating to a different coin)

    return (
        <>
        <NavBarDefault/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ fontSize: '3em', fontWeight: 'bold' }}>
                {detail.name} ({detail.symbol})
            </h1>
            {detail.image && <img src={detail.image.large} alt={detail.name} style={{ height: '100px' }} />}
            
            <div style={{ marginTop: '20px' }}>
                <h2>Current Price: ${detail.market_data?.current_price?.usd}</h2>
                <h3>Market Cap: ${detail.market_data?.market_cap?.usd}</h3>
                <h3>24h Price Change: {detail.market_data?.price_change_percentage_24h}%</h3>
            </div>

            <CoinChart CoinID={id}/>
        </div>
        </>
    );
}

export default CoinDetail;
