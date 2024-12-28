import React from 'react'
import styles from './Navigation.module.css'
import { GiMechanicGarage } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav>
      <div style={{fontSize: 40,marginLeft: 20, display: 'flex' }}><GiMechanicGarage/>FIXAR</div>
      {/* //search */}
      <ul>
        <li >
          <NavLink to="/"><FaHome /> Home</NavLink> 
        </li>
        <li>
          <NavLink to="/specialOffer"><GrProductHunt /> Products</NavLink> 
        </li>
        <li>
          <NavLink to="/carService"><MdOutlineMiscellaneousServices /> Car Service</NavLink> 
        </li>
        <li>
          <NavLink to="/logInSIgnUp"><IoMdLogIn /> LogIn/SignUP</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation