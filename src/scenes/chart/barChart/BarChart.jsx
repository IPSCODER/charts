import React,{useRef} from 'react'
import {
  Chart as Chartjs,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js"
import {Bar, getElementsAtEvent} from "react-chartjs-2";


Chartjs.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);



const BarChart = () => {
  const chartRef = useRef();

  const data = {
    labels:["Mon","Tue","Wed","Thus"],
    datasets:[{
      label:"Sales Numbers",
      data:[3,6,9,3.69],
      borderColor:"black",
      backgroundColor:["aqua","red"],
      borderWidth:1,
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
      <h2>Bar Chart</h2>
      <Bar 
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
      >

      </Bar>
    </div>
  )
}

export default BarChart