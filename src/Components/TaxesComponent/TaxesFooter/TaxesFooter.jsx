import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiHome } from "react-icons/ti";
import { MdAnalytics } from "react-icons/md";
import { FaFileAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


const TaxesFooter = () => {
  return (
    <div className='flex items-center justify-between p-2 h-16'>
      <NavLink to="/" className={({isActive}) => isActive ? "active" : "normLink"}>
            <TiHome className='text-2xl' />
          <span>asosiy</span>
        </NavLink>


      <NavLink to="/taxes" className={({isActive}) => isActive ? "active" : "normLink"}>
        <MdAnalytics className='text-2xl' />
        <span>hisobot</span>
        </NavLink>

        
      <NavLink to="#" className={({isActive}) => isActive ? "active" : "normLink"}>
        <FaFileAlt className='text-2xl' />
        <span>hujjatlar</span>
      </NavLink>


      <NavLink to="#" className={({isActive}) => isActive ? "active" : "normLink"}>
        <FaRegUserCircle className='text-2xl' />
        <span>profil</span>
      </NavLink>
    </div>
  )
}

export default TaxesFooter