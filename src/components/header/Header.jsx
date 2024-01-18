import React from 'react'
import classes from "./header.module.css"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className={classes.header} >
      {/* <li><Link to={"/"} >Home</Link> </li>
      <li><Link to={"/edit"} >Edit</Link> </li> */}
      <li><Link to={"/"} >D3.js</Link> </li>
      <li><Link to={"/charts"} >Chart.js</Link> </li>
    </ul>
  )
}

export default Header