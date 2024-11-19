import React, { useEffect, useState } from "react"
import Chart from "react-google-charts"


export const Linechart=({HistoricalData})=>{
    const [data,setdata]=useState([["Date","Prices"]]);
    console.log("HISTORICALDATA")
    console.log(HistoricalData)
    useEffect(()=>{
        let datacopy=[["Date","Prices"]]
        if(HistoricalData.prices){
            HistoricalData.prices.map((item)=>{
                datacopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setdata(datacopy);
        }

    },[HistoricalData])


    return (
        <Chart

            chartType="LineChart"
            data={data}
            height="100vh"
            width="100vw"
            legendToggle
        
        />
    )
}