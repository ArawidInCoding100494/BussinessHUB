import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Calendar } from 'lucide-react';
import { ThemeContext } from '../../../Context/ThemeContext/ThemeContext';
// import { ThemeContext } from '../../Context/ThemeContext/ThemeContext'; // Yo'lni tekshirib oling

const data = [
  { name: 'Iyun', tushum: 4000, soliq: 2400 },
  { name: 'Iyul', tushum: 5500, soliq: 3000 },
  { name: 'Avg', tushum: 3800, soliq: 2000 },
  { name: 'Sen', tushum: 5600, soliq: 3500 },
  { name: 'Okt', tushum: 3000, soliq: 1500 },
  { name: 'Noy', tushum: 4200, soliq: 1800 },
];

const TaxesCharts = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Dark mode uchun ranglar palitrasi
  const colors = {
    grid: isDark ? '#334155' : '#f1f5f9',
    text: isDark ? '#94a3b8' : '#64748b',
    tushumBar: isDark ? '#1e293b' : '#e2f1f9', // To'qroq fon
    soliqBar: '#0ea5e9', // Asosiy ko'k rang o'zgarmaydi
  };

  return (
    <div className="p-8 rounded-[40px] shadow-sm border my-3 transition-all duration-300"
         style={{ 
           backgroundColor: 'var(--card-bg)', 
           borderColor: isDark ? '#1e293b' : '#f1f5f9' 
         }}>
      
      {/* Sarlavha qismi */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-xl font-bold" style={{ color: 'var(--text-color)' }}>Tushum va Soliqlar</h2>
          <p className="textCol text-sm">Oxirgi 6 oylik dinamika</p>
        </div>
        <div className="flex items-center gap-2 bg-sky-50 dark:bg-sky-900/20 text-sky-600 px-3 py-1.5 rounded-xl text-xs font-bold">
          <Calendar className="w-3.5 h-3.5" />
          <span>2023</span>
        </div>
      </div>

      {/* Raqamli statistika */}
      <div className="mb-8">
        <p className="textCol text-[10px] font-bold uppercase tracking-widest mb-1">
          Oylik o'rtacha tushum
        </p>
        <div className="flex items-baseline gap-2">
          <h1 className="text-3xl font-black" style={{ color: 'var(--text-color)' }}>85,400,000</h1>
          <span className="textCol font-medium text-sm">so'm</span>
          <span className="text-emerald-500 font-bold ml-2">+12%</span>
        </div>
      </div>

      {/* Grafik qismi */}
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer height={256}>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -30, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke={colors.grid} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: colors.text, fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis hide />
            <Bar dataKey="tushum" stackId="a" fill={colors.tushumBar} barSize={45} />
            <Bar dataKey="soliq" stackId="a" fill={colors.soliqBar} radius={[6, 6, 0, 0]} barSize={45} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend (Izoh) */}
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.tushumBar }}></div>
          <span className="textCol text-sm">Tushum</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#0ea5e9]"></div>
          <span className="textCol text-sm">Soliqlar</span>
        </div>
      </div>
    </div>
  );
};

export default TaxesCharts;