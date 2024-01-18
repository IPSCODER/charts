import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './scenes/layout/Index';
import Home from './scenes/home/Home';
import Edit from './scenes/edit/Edit';
import D3 from './scenes/d3/D3';
import Chart from './scenes/chart/Chart';
import LineChart from './scenes/chart/lineChart/LineChart';
import BarChart from './scenes/chart/barChart/BarChart';
import PieChart from './scenes/chart/pieChart/PieChart';
import RadarChart from './scenes/chart/redarChart/RedarChart';
import DoughnutChart from './scenes/chart/doughnutChart/DoughnutChart';
import GaugeChart from './scenes/chart/gaugeChart/GaugeChart';

function App() {
  return (
<>
<BrowserRouter>
<Routes>
  <Route element={<Layout/>} >
    {/* <Route path='/' element={<Home/>} />
    <Route path='/edit' element={<Edit/>} /> */}
    <Route path='/' element={<D3/>} />
    <Route path='/charts' element={<Chart/>} >
    <Route path='/charts' element={<LineChart/>} />
    <Route path='/charts/bar-chart' element={<BarChart/>} />
    <Route path='/charts/pie-chart' element={<PieChart/>} />
    <Route path='/charts/radar-chart' element={<RadarChart/>} />
    <Route path='/charts/doughnut-chart' element={<DoughnutChart/>} />
    <Route path='/charts/gauge-chart' element={<GaugeChart/>} />
    </Route>
  </Route>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
