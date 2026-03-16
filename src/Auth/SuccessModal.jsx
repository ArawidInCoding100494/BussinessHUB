import { useContext, useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';

const SuccessModal = () => {
  const { Theme } = useContext(ThemeContext);
  const [progress, setProgress] = useState(0);

  // Progress bar animatsiyasi
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) return 100;
        return Math.min(oldProgress + 2, 100);
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 p-4 transition-colors duration-300'
         style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      
      {/* Modal Card */}
      <div className='relative w-full max-w-sm rounded-4xl overflow-hidden shadow-2xl transition-all duration-300'
           style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
        
        {/* Yuqori Header */}
        <div className="flex items-center justify-between p-6">
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <IoClose className="text-2xl" />
          </button>
          <h4 className="font-bold text-lg">BiznesHub</h4>
          <div className="w-10"></div> {/* Simmetriya uchun */}
        </div>

        {/* Markaziy qism */}
        <div className="flex flex-col items-center px-8 pb-12 pt-4">
          
          {/* Yashil Check belgisi */}
          <div className="relative mb-8">
             <div className="w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20">
                <FaCheck className="text-white text-4xl" />
             </div>
             {/* Pulsatsiya animatsiyasi (Orqa fondagi halqa) */}
             <div className="absolute inset-0 w-24 h-24 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
          </div>

          <h2 className="text-3xl font-black text-center leading-tight mb-2">
            Muvaffaqiyatli kirdingiz!
          </h2>
          <p className="textCol text-center font-medium opacity-80 mb-10">
            Dashboardga o'tmoqda...
          </p>

          {/* Progress Bar */}
          <div className="w-full space-y-4">
            <div className="w-full bg-gray-100 dark:bg-gray-900 h-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-blue-500 text-xs font-bold tracking-[0.2em] uppercase">
               <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
               YUKLANMOQDA
            </div>
          </div>
        </div>

        {/* Pastki Xavfsizlik belgisi */}
        <div className="p-6 flex justify-center border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            <MdVerifiedUser className="text-sm text-blue-500" />
            BIZNESHUB XAVFSIZ TIZIM
          </div>
        </div>

      </div>
    </div>
  );
};

export default SuccessModal;