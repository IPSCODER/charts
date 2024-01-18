import React,{useRef} from 'react'
import {Chart as ChartJs, ArcElement,  Tooltip, Legend} from "chart.js";
import { Pie, getElementsAtEvent} from "react-chartjs-2";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
  );


const PieChart = () => {

    const chartRef = useRef();

    const data ={
        labels:["Mon","Tue","Wed"],
        datasets:[{
            label:"Sales",
            data:[3,6,9],
            borderColor:"black",
            backgroundColor:["red","aqua","purple"],
            link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
        }]
    }


    const options ={

    }
  
  
    const onClick = (e) =>{
      if (getElementsAtEvent(chartRef.current,e).length > 0 ) { 
        console.log(getElementsAtEvent(chartRef.current,e))
        const clickDatasetIndex = getElementsAtEvent(chartRef.current,e)[0].datasetIndex;
        console.log(clickDatasetIndex);
        const dataPoint = getElementsAtEvent(chartRef.current,e)[0].index;
        console.log(dataPoint);
  
        // console.log(data.datasets[clickDatasetIndex].link);
        const link = data.datasets[clickDatasetIndex].link[dataPoint];
        // window.open("https://www.chartjs3.com","_blank");
      }
  
    }
  

  return (
    <div style={{width:"80%",padding:"20px",height:"100%"}}  >
        <h2>Pie Chart</h2>
        <Pie
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        >
            
        </Pie>
    </div>
  )
}

export default PieChart