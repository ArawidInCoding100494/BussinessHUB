import React, { useState } from 'react';

const Slider = () => {
  const [activeTab, setActiveTab] = useState(0); // Qaysi kategoriya tanlanganini boshqarish

  const categories = [
    "Barchasi",
    "Non mahsulotlari",
    "Sutli mahsulotlar",
    "Ichimliklar",
    "Mevalar",
    "Sabzavotlar",
  ];

  return (
    <div className="w-full py-5">
      {/* no-scrollbar klassi ishlashi uchun index.css da qo'shimcha CSS kerak bo'ladi */}
      <div className="flex overflow-x-auto gap-3 px-2 no-scrollbar scroll-smooth">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300
              ${
                activeTab === index
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-none" 
                  : "bg-[var(--input-bg)] text-slate-500 dark:text-slate-400 hover:bg-gray-200 dark:hover:bg-slate-700"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;