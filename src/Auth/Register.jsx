import React, { useRef, useContext } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";
import { ThemeContext } from '../Context/ThemeContext/ThemeContext';

const Register = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const marketName = useRef();
  const stirPinfl = useRef();
  const userPhone = useRef();

  const regEx = /^\d{9}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const testingNumber = userPhone.current.value;

    if (!regEx.test(testingNumber)) {
      alert("Telefon raqami noto'g'ri formatda kiritildi");
      return;
    }

    const formattedPhone = `+998${testingNumber}`;
    console.log({
      marketName: marketName.current.value,
      stirPinfl: stirPinfl.current.value,
      userPhone: formattedPhone
    });
    alert("ma'lumotlar yuborildi");

    marketName.current.value = "";
    stirPinfl.current.value = "";
    userPhone.current.value = "";
  };

  return (
    <section className='login flex flex-col min-h-screen transition-colors duration-300' 
             style={{ backgroundColor: 'var(--main-bg)', color: 'var(--text-color)' }}>
      
      {/* Header */}
      <div className="login-header h-18 flex items-center capitalize font-semibold text-2xl border-b border-gray-100 dark:border-gray-800 px-4"
           style={{ backgroundColor: 'var(--card-bg)' }}>
        <FaArrowLeftLong className='text-xl cursor-pointer' />
        <h3 className='ml-8'>profilni toldiring</h3>
      </div>

      <div className='login-main flex-1 container'>
        <div className='py-8 flex flex-col items-center justify-center capitalize'>
          {/* Yuqoridagi ikonka */}
          <div className='h-16 w-16 flex items-center justify-center rounded-2xl bg-[#e5f3fa] dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'>
            <FaArchive className='text-2xl' />
          </div>
          
          <h1 className='w-[80%] md:w-[50%] text-center my-4 text-2xl font-bold' style={{ color: 'var(--text-color)' }}>
            Assalomu alekum biznesingizni raqamlashtiramiz
          </h1>
          <p className='textCol w-[85%] text-center'>
            tizimdan foydalanish uchun quydagi ma'lumotlarni kiriting
          </p>

          {/* Logotip yuklash qismi */}
          <div className='mt-10 flex flex-col items-center'>
            <div className='relative flex flex-col items-center justify-center border-2 border-dotted border-slate-300 dark:border-slate-600 h-32 w-32 rounded-full cursor-pointer transition-all overflow-visible'
                 style={{ backgroundColor: isDark ? 'var(--input-bg)' : '#f1f5f9' }}>
              
              <MdAddAPhoto className='text-[40px] mb-1 text-slate-500 dark:text-slate-400' />
              <span className='text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400'>yuklash</span>

              {/* Ko'k plyus tugmachasi */}
              <div className='absolute bottom-1 right-1 translate-x-1/4 translate-y-1/4 h-10 w-10 rounded-full flex items-center justify-center bg-[#0081c9] text-white border-4 shadow-sm'
                   style={{ borderColor: 'var(--card-bg)' }}>
                <span className='text-2xl font-light'>+</span>
              </div>
            </div>
            <h3 className='text-2xl mt-6 font-medium' style={{ color: 'var(--text-color)' }}>Logotip yuklash</h3>
          </div>
        </div>

        <div className='max-w-md mx-auto'>
          <form className='p-4' onSubmit={handleSubmit}>
            <label className='capitalize flex flex-col mt-2'>
              <span className='text-sm font-medium ml-1'>business nomi</span>
              <input type="text" placeholder='Mening dokonim' className='inp mt-1' ref={marketName} />
            </label>

            <label className='capitalize flex flex-col mt-4'>
              <span className='text-sm font-medium ml-1'>STIR / PINFL</span>
              <input type="text" placeholder='000 000 000' className='inp mt-1' ref={stirPinfl} />
            </label>

            <label className='capitalize flex flex-col mt-4'>
              <span className='text-sm font-medium ml-1'>Telefon raqami</span>
              <input type="text" placeholder='+998 --- --- ---' className='inp mt-1' ref={userPhone} />
            </label>

            <p className='textCol flex items-center justify-center my-6 font-semibold text-sm'>
              <IoMdLock className='text-xl text-emerald-500' />
              <span className='ml-3'>Ma'lumotlaringiz xavfsiz saqlanadi</span>
            </p>

            <button className='LoginFomBtn mt-10 w-full flex items-center justify-center gap-3 capitalize font-bold cursor-pointer' type='submit'>
              <span>saqlash va boshlash</span>
              <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;