import { useContext } from 'react';
import Footer from '../Components/HomeComponents/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';

const RootLayOut = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    /* 1. className ichida ${theme} bo'lishi shart ('dark' yoki 'light' klassi keladi)
       2. Inline style yoki CSS orqali fon rangini boshqaramiz
    */
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme} relative`} 
         style={{ backgroundColor: 'var(--main-bg)', color: 'var(--text-color)' }}>
      
      <nav className="p-2 flex justify-end container absolute right-4 top-3">
        <button 
          onClick={toggleTheme}
          className="p-0.5 rounded-xl border border-gray-400 hover:bg-blue-100 transition-all cursor-pointer"
        >
          {theme === "light" ? "🌙 " : "☀️"}
        </button>
      </nav>

      <main className='flex-1'>
        <Outlet />
      </main>

      <footer className='h-18 flex flex-col justify-center py-2 border-t border-gray-700/10'>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayOut;