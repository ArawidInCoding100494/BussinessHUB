import { Banknote, Calendar, TrendingUp, Clock } from 'lucide-react';
import TaxesCharts from '../TaxesCharts/TaxesCharts';
import { MdPictureAsPdf } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaUsers } from "react-icons/fa";



const TaxesAnalitika = () => {

  const fullValues = [
    {
      id: 1,
      title: "QQS (VAT)",
      subtitle: "12% stavka bo'yicha",
      amount: "4,200,000",
      icon: <MdOutlineReceiptLong/>, 
      bgColor: "bg-orange-100 dark:bg-orange-900/20", // Dark mode uchun shaffof rang
      iconColor: "text-[#d97706]",
    },
    {
      id: 2,
      title: "Daromad solig'i",
      subtitle: "Yuridik shaxslar uchun",
      amount: "8,300,000",
      icon: <FaUsers/>,
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      iconColor: "text-blue-500",
    },
  ];

  const cardStyle = {
    backgroundColor: 'var(--card-bg)',
    color: 'var(--text-color)',
    borderColor: 'rgba(148, 163, 184, 0.1)' // slate-100 ga yaqin shaffof border
  };


  return (
    <div className='mt-5 transition-colors duration-300'>
      {/* Sarlavha qismi */}
      <div>
        <h3 className='text-blue-600 uppercase font-semibold tracking-wider'>business analitika</h3>
        <h2 className='capitalize font-bold tracking-tight' style={{ color: 'var(--text-color)' }}>moliyaviy xulosa</h2>
      </div>

      {/* Moliyaviy xulosa kartalari */}
      <div className="flex gap-2 mt-5 overflow-x-auto pb-2"> 
        {/* Joriy chorak solig'i */}
        <div className="p-6 rounded-3xl shadow-sm border w-64 shrink-0" style={cardStyle}>
          <div className="flex items-center mb-4">
            <Banknote className="w-5 h-5 text-sky-500" />
            <span className="text-sky-500 font-medium text-[15px] ml-1.5">Joriy chorak solig'i</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">12,500,000</h2>
          <div className="flex items-center gap-1 text-emerald-500 font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>+5.2%</span>
          </div>
        </div>

        {/* Keyingi muddat */}
        <div className="p-6 rounded-3xl shadow-sm border w-64 shrink-0" style={cardStyle}>
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-sky-500" />
            <span className="text-sky-500 font-medium text-[15px]">Keyingi muddat</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 tracking-tight">15-Oktabr</h2>
          <div className="flex items-center gap-1 text-rose-500 font-medium bg-rose-50/50 dark:bg-rose-950/30 w-fit px-2 py-0.5 rounded-full">
            <Clock className="w-4 h-4 fill-rose-500 text-white dark:text-rose-950" />
            <span>-2 kun</span>
          </div>
        </div>
      </div>

      {/* Chart qismi (TaxesCharts ichida ham xuddi shu uslubni qo'llang) */}
      <TaxesCharts />

      {/* Tugmalar qismi - .analitikaMainBtn allaqachon CSS-da moslangan */}
      <section className='my-4 py-2 flex flex-col items-center gap-2'>
        <button className='analitikaMainBtn'>
          <MdPictureAsPdf className='text-2xl' />
          <span>pdf hisobotni yuklash</span>
        </button>
        <button className='analitikaMainBtn'>
          <IoShareSocialSharp className='text-2xl' />
          <span>ulashish</span>
        </button>
      </section>

      {/* Batafsil ma'lumotlar */}
      <section className='my-4'>
        <h3 className='capitalize font-semibold mb-3' style={{ color: 'var(--text-color)' }}>batafsil ma'lumot</h3>
        {fullValues.map((item) => (
          <div key={item.id} 
               className="flex items-center gap-4 p-4 rounded-2xl shadow-sm border mt-3 transition-all"
               style={cardStyle}>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${item.iconColor} ${item.bgColor} text-xl`}>
              {item.icon}
            </div>
            <div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="textCol text-sm">{item.subtitle}</p>
            </div>
            <div className='ml-auto font-bold text-lg'>
               {item.amount}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default TaxesAnalitika