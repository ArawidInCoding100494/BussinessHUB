import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { FaEllipsisVertical } from "react-icons/fa6";

const TaxesHeader = () => {
  return (
    <div className='flex items-center justify-between p-2 border-b border-gray-200 dark:border-gray-800 transition-colors' 
         style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
      <FaArrowLeft className='text-blue-600 cursor-pointer' />
      <h3 className='font-semibold tracking-wider'>Soliq Hisoboti</h3>
      <FaEllipsisVertical className='cursor-pointer' />
    </div>
  )
}

export default TaxesHeader