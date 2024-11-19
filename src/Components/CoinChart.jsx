import axios from "axios";
import { useEffect, useState } from "react";

import { convertTimestamp } from "../assets/Converttime";
import { Linechart } from "./Linechart";


const temp = import.meta.env.VITE_API_KEY;

function CoinChart({CoinID}){
    const id=CoinID;
    const Chart_API = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30${temp}`
   
    const [HistoricalData,setHistoricalData]=useState({});
    const getChart= async () =>{
        try {
            const chart_Detail=await axios.get(Chart_API);
            
            console.log("CHART INFO OF THE COIN");
            
            
            console.log(chart_Detail.data.prices);

            setHistoricalData(chart_Detail.data)
            console.log(HistoricalData)

        } catch (error) {
            console.log(error);
        }
    }

    

    useEffect(() => {
        getChart();
    }, [CoinID])

    return (
        
        <div>
           <Linechart HistoricalData={HistoricalData}/>
        </div>
    )
}
export default CoinChart;