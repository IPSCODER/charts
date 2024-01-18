import React, {useRef} from 'react'
import {Chart as ChartJs, ArcElement,Tooltip,Legend} from "chart.js";
import { Doughnut, getElementsAtEvent} from "react-chartjs-2";

 
ChartJs.register(
  ArcElement,
  Tooltip,
  Legend,
);

const GaugeChart = () => {
  const chartRef = useRef();


  const data={
    labels:["Mon","Tue","Wed"],
    datasets:[{
      label:"weekdays",
      data:[3,6,9],
      borderColor:"#000",
      backgroundColor:["aqua","Red","black"],
      circumference:180,
      rotation:270,
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


  const gaugeText = {
    id:"gaugeText",
    beforeDatasetsDraw(chart,args,pluginOptions){
        const {ctx,data,chartArea:{top,bottom,left,right,width,height}} = chart;

        const xCenter = chart.getDatasetMeta(0).data[0].x;

        const yCenter = chart.getDatasetMeta(0).data[0].y; 

        ctx.save();
        ctx.fillStyle = "gray";
        ctx.font = "bold 30px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseLine = "baseLine"
        // ctx.fillText(data.datasets[0].data[2],xCenter,yCenter - 10 )
        ctx.fillText( "value = "+ data.datasets[0].data.length,xCenter,yCenter - 10 )
    }
  }


 
  return (
    <div style={{width:"80%",padding:"20px",height:"100%"}}  >
      <h2>GaugeChart</h2>
      
        <Doughnut
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
        plugins={[gaugeText]}
        >

        </Doughnut>
    </div>
  )
}

export default GaugeChart