import React, {useRef} from 'react'
import {Chart as ChartJs, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend} from "chart.js";
import { Line, getElementsAtEvent} from "react-chartjs-2";

 
ChartJs.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const LineChart = () => {
  const chartRef = useRef();


  const data={
    labels:["Mon","Tue","Wed"],
    datasets:[{
      label:"weekdays",
      data:[30,33,66],
      borderColor:"aqua",
      backgroundColor:"aqua",
      tension:0.4,
      link:["https://www.chartjs.org","https://www.chartjs3.com","https://www.google.com"]
    },
    {
      label:"month",
      data:[12,40,55],
      borderColor:"red",
      backgroundColor:"red",
      tension:0.4,
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
      <h2>LineChart</h2>
      
        <Line
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        >

        </Line>
    </div>
  )
}

export default LineChart