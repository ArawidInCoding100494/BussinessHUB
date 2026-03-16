import React from 'react'
import Alerts from '../../Components/HomeComponents/Alerts/Alerts'
import Header from '../../Components/HomeComponents/Header/Header'
import Footer from '../../Components/HomeComponents/Footer/Footer'

const Home = () => {
  return (
    <div className='h-screen flex flex-col'>
      <div className='h-18 flex flex-col justify-center'>
      <Header/>
      </div>
      <div className='flex-1' >
      <Alerts/>
      </div>
       {/* <div className='h-18 flex flex-col justify-center py-2 '>
       <Footer/>
       </div> */}
    </div>
  )
}

export default Home