

import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='h-screen flex flex-col'>
      <header className='h-18 flex flex-col justify-center'>
        <Header/>
      </header>
      <main className='flex-1 bg-[#f5f7f8]'>
        <Outlet/>
      </main>
      <footer className='h-18 flex flex-col justify-center py-2 '>
        <Footer/>
      </footer>
    </div>
  )
}

export default RootLayOut