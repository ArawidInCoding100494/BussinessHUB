// Ikonkalarni to'g'ri paketlardan chaqirish
import { FaArchive, FaUser } from "react-icons/fa"; // FaRegSquarePlus bu yerdan o'chirildi
import { FaRegSquarePlus } from "react-icons/fa6"; // Mana bu to'g'ri joyi
import { BiSolidWallet } from "react-icons/bi";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const Alerts = () => {
  return (
    <section className='container px-2 mt-4'>
        
        <section className='alerts-top'>
          {/* "Bugungi savdo" kartochkasi */}
          <div className='p-3 px-4 rounded-2xl shadow-sm capitalize transition-colors duration-300' 
               style={{ backgroundColor: 'var(--card-bg)' }}>
              <div className='flex items-center justify-between'>
                  <h3 className='textCol'>bugungi savdo</h3>
                  <p className='text-[#25a67d] font-bold text-[14px] px-2 flex items-center justify-center rounded-2xl bg-[#d1fae5] dark:bg-[#064e3b] dark:text-[#34d399]'>
                    +12.5%
                  </p>
              </div>
              <div className='flex items-center mt-2'>
                  <h2 className='font-bold text-2xl'>4,250,000</h2>
                  <span className='textCol text-sm ml-1'>uzs</span>
              </div>
          </div>

          <div className='grid grid-cols-2 gap-3 mt-5'>
              {/* Qoldiq kam kartochkasi */}
              <div className='p-3 rounded-2xl border border-[#fdefdc] dark:border-orange-900/30' 
                   style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div className='bg-orange-100 dark:bg-orange-900/20 h-13 w-13 flex items-center justify-center rounded-full'>
                    <FaArchive className='text-[#ea580c]'/>
                  </div>
                  <div>
                    <h2 className='my-2 mt-4 capitalize font-bold text-xl'>qoldiq kam</h2>
                    <p className='textCol'>12 ta mahsulot <br /> tugamoqda</p>
                  </div>
              </div>

              {/* Soliq kartochkasi */}
              <div className='p-3 rounded-2xl border border-[#d4e8f1] dark:border-blue-900/30' 
                   style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div className='bg-blue-100 dark:bg-blue-900/20 h-13 w-13 flex items-center justify-center rounded-full'>
                    <BiSolidWallet className='text-[#0088cc]'/>
                  </div>
                  <div>
                    <h2 className='my-2 mt-4 capitalize font-bold text-xl'>soliq topshirish</h2>
                    <p className='textCol'>muddat: 20-oktabr</p>
                  </div>
              </div>
          </div>
        </section>

        <section className='alerts-amallar mt-4 p-2'>
            <h3 className='textCol capitalize font-bold'>tezkor amallar</h3>
            <nav>
              <div className="flex items-center justify-between mt-2 p-2.5 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-all">
                  <div className='flex items-center capitalize font-bold'>
                    <MdAddShoppingCart className='text-2xl'/>
                    <span className='ml-2'>savdo qo'shish</span>
                  </div>
                  <IoIosArrowForward />
              </div>

              <div className="flex items-center justify-between mt-2 p-2.5 rounded-lg border dark:border-gray-700 transition-colors cursor-pointer"
                   style={{ backgroundColor: 'var(--card-bg)' }}>
                  <div className='flex items-center capitalize font-bold'> 
                    <FaRegSquarePlus className='text-2xl text-blue-600'/>
                    <span className='ml-2'>tovar qo'shish</span>
                  </div>            
                  <IoIosArrowForward className='textCol'/>
              </div>
            </nav>
        </section>

        <section className='theLastTrade'>
          <div className='theLastTrade-header flex items-center justify-between my-4 capitalize'>
              <h2 className='textCol uppercase'>oxirgi savdolar</h2>
              <Link className='text-blue-600 font-semibold'>barchasi</Link>
          </div>

          <div className='theLastTrade-main p-3 rounded-2xl shadow-sm flex flex-col transition-colors duration-300'
               style={{ backgroundColor: 'var(--card-bg)' }}>
            
            {/* Savdo kartochkasi 1 */}
            <div className='theLastTrade-card flex items-center justify-between mb-2 border-b pb-2 border-gray-200 dark:border-gray-700'>
                <div className='theLastTrade-card-left flex items-center gap-2'>
                    <div className='text-3xl'>
                        <FaUser className='text-[#84a3b9]' />
                    </div>
                    <div className="capitalize">
                        <h2 className='text-xl font-bold'>Jahongir Fozilov</h2>
                        <p className='textCol'>bugun, 14:25</p>
                    </div>
                </div>
                <div className="theLastTrade-card-right">
                    <h2 className='font-bold text-green-600 dark:text-green-400'>+450,000</h2>
                </div>
            </div>

            {/* Savdo kartochkasi 2 */}
            <div className='theLastTrade-card flex items-center justify-between'>
                <div className='theLastTrade-card-left flex items-center gap-2'>
                    <div className='text-3xl'>
                        <FaUser className='text-[#84a3b9]' />
                    </div>
                    <div className="capitalize">
                        <h2 className='text-xl font-bold'>Jahongir Fozilov</h2>
                        <p className='textCol'>bugun, 14:25</p>
                    </div>
                </div>
                <div className="theLastTrade-card-right">
                    <h2 className='font-bold text-green-600 dark:text-green-400'>+450,000</h2>
                </div>
            </div>
          </div>
        </section>
    </section>
  )
}

export default Alerts;