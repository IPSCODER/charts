import React, {useRef} from 'react'
import {Chart as ChartJs, LineElement, PointElement,  Tooltip, Legend,RadialLinearScale, Filler} from "chart.js";
import { Radar, getElementsAtEvent} from "react-chartjs-2";

 
ChartJs.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

const RadarChart = () => {
  const chartRef = useRef();


  const data={
    labels:["Mon","Tue","Wed"],
    datasets:[{
      label:"weekdays",
      data:[3,6,9],
      borderColor:"#000",
      backgroundColor:"aqua",
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
      <h2>RadarChart</h2>
      
        <Radar
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        >

        </Radar>
    </div>
  )
}

export default RadarChart