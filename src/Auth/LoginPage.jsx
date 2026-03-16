import React, { useRef, useContext } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaArchive } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import { ThemeContext } from '../Context/ThemeContext/ThemeContext'; // Yo'lni tekshiring

const LoginPage = () => {
  const { theme } = useContext(ThemeContext);
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
      stirPinfl: stirPinfl.current.value,
      userPhone: formattedPhone
    });
    alert("ma'lumotlar yuborildi");
    
    stirPinfl.current.value = "";
    userPhone.current.value = "";
  };

  return (
    <section className='login flex flex-col min-h-screen transition-colors duration-300' 
             style={{ backgroundColor: 'var(--main-bg)', color: 'var(--text-color)' }}>

        {/* Header - Shodow dark modeda juda sezilmasligi uchun border qo'shildi */}
        <div className="login-header h-18 flex items-center px-4 capitalize font-semibold text-2xl border-b border-gray-100 dark:border-gray-800"
             style={{ backgroundColor: 'var(--card-bg)' }}>
            <FaArrowLeftLong className='text-xl cursor-pointer' />
            <h3 className='ml-8'>profilni toldiring</h3>
        </div>

        <div className='login-main flex-1 container'>
          <div className='py-8 flex flex-col items-center justify-center capitalize'>
            {/* Ikonka foni */}
            <div className='h-16 w-16 flex items-center justify-center rounded-2xl bg-[#e5f3fa] dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'>
              <FaArchive className='text-2xl'/>
            </div>
            
            {/* Sarlavha - matn rangi dinamik qilindi */}
            <h1 className='w-[80%] md:w-[50%] text-center my-4 text-2xl font-bold' 
                style={{ color: 'var(--text-color)' }}>
              Assalomu alekum biznesingizni raqamlashtiramiz
            </h1>
            <p className='textCol w-[85%] text-center'>
              tizimdan foydalanish uchun quydagi ma'lumotlarni kiriting
            </p>
          </div>

          <div className='max-w-md mx-auto'>
            <form className='p-4' onSubmit={handleSubmit}>

              <label className='capitalize flex flex-col mt-2'>
                <span className='font-medium text-sm ml-1'>STIR / PINFL</span>
                <input type="text" placeholder='000 000 000' 
                       className='inp mt-1 transition-all'
                       ref={stirPinfl} />
              </label>

              <label className='capitalize flex flex-col mt-4'>
                <span className='font-medium text-sm ml-1'>Telefon raqami</span>
                <input type="text" placeholder='+998 --- --- ---' 
                       className='inp mt-1 transition-all'
                       ref={userPhone} />
              </label>

              <p className='textCol flex items-center justify-center my-6 font-semibold text-sm'>
                <IoMdLock className='text-xl text-emerald-500'/>
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
  )
}

export default LoginPage;