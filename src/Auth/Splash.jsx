import { MdHub } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Splash = () => {
  return (
    // 'bg-[var(--main-bg)]' va 'text-[var(--text-color)]' orqali dinamiklikni ta'minlaymiz
    <div className="flex flex-col min-h-screen bg-[var(--main-bg)] text-[var(--text-color)] font-sans transition-colors duration-300">
      
      {/* Markaziy qism */}
      <div className="flex-grow flex flex-col justify-center items-center">
        
        {/* Logotip */}
        <div className="relative w-28 h-28 mb-8 shadow-2xl rounded-3xl">
          <div className="w-full h-full bg-blue-600 rounded-3xl flex items-center justify-center p-3">
            <MdHub className="text-white w-[75%] h-[75%]" />
          </div>
          {/* Ikonka fonini ham dinamik qildik */}
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[var(--card-bg)] rounded-full flex items-center justify-center shadow-lg border border-gray-100/10">
            <BsFillLightningChargeFill className="text-blue-600 w-5 h-5" />
          </div>
        </div>

        {/* Sarlavha */}
        <h1 className="text-[32px] font-bold mb-16">BiznesHub</h1>

        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-gray-100/20 border-t-blue-600"></div>
        </div>

        {/* Matnlar */}
        <div className="text-center space-y-2">
          <p className="font-semibold text-lg">Yuklanmoqda...</p>
          <p className="opacity-60 text-sm">Telegram orqali kirish</p>
        </div>
      </div>

      {/* Footer qismi */}
      <div className="w-full px-10 pb-10">
        {/* Progress bar foni */}
        <div className="w-full h-[3px] bg-[var(--input-bg)] rounded-full mb-4 overflow-hidden">
          {/* Progress bar to'lgan qismi */}
          <div className="w-[35%] h-full bg-blue-600"></div>
        </div>
        
        <div className="flex justify-between items-center text-[11px] font-bold opacity-50 tracking-widest uppercase">
          <p>Version 2.0</p>
          <p>Secure Connection</p>
        </div>
      </div>

    </div>
  );
};

export default Splash;