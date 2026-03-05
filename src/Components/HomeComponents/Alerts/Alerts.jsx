import React from 'react'

// icons
import { FaArchive } from "react-icons/fa";
import { BiSolidWallet } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegSquarePlus } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const Alerts = () => {
  return (
    <section className='container px-2 mt-4'>
        
        <section className='alerts-top'>
        <div className='bg-white p-3 px-4 rounded-2xl shadow capitalize'>
            <div className='flex items-center justify-between'>
                <h3 className='textCol'>bugungi savdo</h3>
                <p className='text-[#25a67d] font-bold text-[14px] px-2 flex items-center justify-center rounded-2xl bg-[#d1fae5]'>+12.5%</p>
            </div>
            <div className='flex items-center mt-2'>
                <h2 className='font-bold text-2xl'>4,250,000</h2>
                <span className='textCol text-sm ml-1'>uzs</span>
            </div>
        </div>


        <div className='grid grid-cols-2 gap-3 mt-5'>
            <div className='bg-[#fff7ed] border border-[#fdefdc] p-3 rounded-2xl'>
                <div className='bg-[#ffedd5] h-13 w-13 flex items-center justify-center rounded-full'>
                <FaArchive className='text-[#ea580c]'/>
                </div>
                <div>
                <h2 className='my-2 mt-4 capitalize font-bold text-xl'>qoldiq kam</h2>
                <p className='textCol '>12 ta mahsulot <br /> tugamoqda</p>
                </div>
            </div>


            <div className='bg-[#e8f1f5] border border-[#d4e8f1] p-3 rounded-2xl'>
                <div className='bg-[#d0e6f1] h-13 w-13 flex items-center justify-center rounded-full'>
                <BiSolidWallet  className='text-[#0088cc]'/>
                </div>
                <div>
                <h2 className='my-2 mt-4 capitalize font-bold text-xl'>soliq topshirish</h2>
                <p className='textCol '>muddat: 20-oktabr</p>
                </div>
            </div>
        </div>
        </section>

        <section className='alerts-amallar mt-4 p-2'>
            <h3 className='textCol capitalize font-bold'>tezkor amallar</h3>
            <nav>
            <div className="flex items-center justify-between mt-2 p-2.5 rounded-lg bg-blue-600 text-white">

                <div className='flex items-center capitalize font-bold'>
                <MdAddShoppingCart className='text-2xl'/>
                 <span className='ml-2'>savdo qo'shish</span>
                 </div>
                 <IoIosArrowForward />
            </div>

            <div className="flex items-center justify-between mt-2 p-2.5 rounded-lg border">
                <div className='flex items-center capitalize font-bold'> 
                <FaRegSquarePlus className='text-2xl  text-blue-600'/>
                <span className='ml-2'>tovar qo'shish</span>
                </div>            
                <IoIosArrowForward />
            </div>
            </nav>

        </section>

        <section className='theLastTrade'>
        <div className='theLastTrade-header flex items-center justify-between my-4 capitalize'>
            <h2 className='textCol uppercase'>oxrigi savdolar</h2>
            <Link className='text-blue-600'>barchasi</Link>
        </div>

        <div className='theLastTrade-main p-3 rounded-2xl bg-white shadow flex flex-col '>
        <div className='theLastTrade-card flex items-center justify-between mb-2 border-b pb-2 border-black/30'>
            <div className='theLastTrade-card-left flex items-center gap-2'>
            
                    <div className=' text-3xl  '>
                        <FaUser className='text-[#84a3b9]'  />
                    </div>
            
                    <div className="capitalize">
                        <h2 className='text-xl font-bold '>jaxongir fozilov</h2>
                        <p className='textCol'>bugun, 14:25</p>
                    </div>
            
            </div>
            
                    <div className="theLastTrade-card-right">
                       <h2 className='font-bold'>+450,000</h2>
                    </div>
        </div>

        <div className='theLastTrade-card flex items-center justify-between mb-2 '>
            <div className='theLastTrade-card-left flex items-center gap-2'>
            
                    <div className=' text-3xl  '>
                        <FaUser className='text-[#84a3b9]'  />
                    </div>
            
                    <div className="capitalize">
                        <h2 className='text-xl font-bold '>jaxongir fozilov</h2>
                        <p className='textCol'>bugun, 14:25</p>
                    </div>
            
            </div>
            
                    <div className="theLastTrade-card-right">
                       <h2 className='font-bold'>+450,000</h2>
                    </div>
        </div>
        </div>
        </section>


    </section>
  )
}

export default Alerts