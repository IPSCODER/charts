import React from 'react'
import classes from "./chart.module.css"
import { Link, Outlet } from 'react-router-dom'

const Chart = () => {
  return (
    <div className={classes.charts} >
        <header>
        <h2>Chart.js</h2>
        <ul>
            <li><Link to={"/charts"} >Line Chart</Link></li>
            <li><Link to={"/charts/bar-chart"} >bar chart</Link></li>
            <li><Link to={"/charts/pie-chart"} >Pie chart</Link></li>
            <li><Link to={"/charts/radar-chart"} >Radar chart</Link></li>
            <li><Link to={"/charts/doughnut-chart"} >Doughnut</Link></li>
            <li><Link to={"/charts/gauge-chart"} >Gauge Chart</Link></li>
        </ul>

        </header>
        <Outlet/>
    </div>
  )
}

export default Chart