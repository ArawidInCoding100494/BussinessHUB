
import { FaUser } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Header = () => {
  return (
    <div className='header px-2 flex items-center justify-between'>

        <div className='header-left flex items-center gap-2'>

        <div className='border-2 border-blue-600 h-12 w-12 flex items-center justify-center rounded-full text-3xl bg-amber-400 '>
            <FaUser className='text-[#84a3b9]'  />
        </div>

        <div className="capitalize">
            <h2 className='text-xl font-bold '>bussinessHUB</h2>
            <p>User name</p>
        </div>

        </div>

        <div className="header-right flex items-center gap-4 mr-15">
            <FaBell className='text-gray-600 text-2xl' />
            <IoMdSettings className='text-gray-600 text-2xl' />
        </div>

    </div>
  )
}
{/* <FaBell /> */}

export default Header