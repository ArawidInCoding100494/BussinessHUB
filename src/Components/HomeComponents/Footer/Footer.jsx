// rrd imports
import { NavLink } from 'react-router-dom'

// icons 
import { TiHome } from "react-icons/ti";
import { FaArchive } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BiSolidWallet } from "react-icons/bi";


const Footer = () => {
  return (
    <div className=''>
        <nav className='flex items-center justify-between gap-1 px-4'>

            <NavLink to="/" className={({isActive}) => isActive ? "active" : "normLink"}>
            <TiHome className='text-2xl' />
            <span>Home</span>
            </NavLink>


            <NavLink to="/products" className={({isActive}) => isActive ? "active" : "normLink"}>
            <FaArchive className='text-2xl' />
            <span>Tovarlar</span>
            </NavLink>


            <NavLink to="/taxes" className={({isActive}) => isActive ? "active" : "normLink"}>
            <MdOutlineReceiptLong className='text-2xl' />
            <span>Soliqlar</span>
            </NavLink>


            <NavLink to="/clients" className={({isActive}) => isActive ? "active" : "normLink"}>
            <FaUsers className='text-2xl' />
            <span>Klientlar</span>
            </NavLink>


            <NavLink to="/payments" className={({isActive}) => isActive ? "active" : "normLink"}>
            <BiSolidWallet className='text-2xl' />
            <span>tolovlar</span>
            </NavLink>
        </nav>
    </div>
  )
}

export default Footer