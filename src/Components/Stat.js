import React from 'react'
import Data from '../../src/new_data1';
import papa from 'papaparse';
import { useEffect,useState } from 'react';
import {Bar} from 'react-chartjs-2';
import {
    Chart as chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

chartjs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)

function Stat(){
    const [chartData, setChartData] = useState({
        datasets: []
    });
    const [chartOptions,setChartOptions] = useState({

    });

    useEffect(() =>{
        Papa.parse(Data, {
            download:true,
            header:true,
            dynamicTyping:true,
            delimiter: "",
            complete:((result) =>{
                console.log(result)
            })
        })
    }, {})
  return (
    <div>Stat</div>
  );
}

export default Stat;