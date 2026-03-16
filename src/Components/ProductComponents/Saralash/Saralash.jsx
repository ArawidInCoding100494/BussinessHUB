import { useState } from 'react'
import { RiArrowUpDownLine } from "react-icons/ri"
import { BiEdit } from "react-icons/bi";
import Nonimage from './images/non.jpg'

const Saralash = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Non", zaxira: 12, narx: 2000, image: Nonimage },
        { id: 2, name: "Donut", zaxira: 10, narx: 8000, image: Nonimage },
        { id: 3, name: "Pechenye", zaxira: 0, narx: 4000, image: Nonimage },
        // ... boshqa mahsulotlar
    ])

    const handleSort = () => {
        const sorted = [...products].sort((a, b) => a.narx - b.narx)
        setProducts(sorted)
    }

    return (
        // bg-gray-100 o'rniga var(--main-bg) ishlatildi
        <div className='w-full px-3 transition-colors duration-300' style={{ backgroundColor: 'var(--main-bg)' }}>

            {/* Sarlavha va Saralash tugmasi */}
            <div className='flex justify-between items-center py-4'>
                <h2 className='font-semibold' style={{ color: 'var(--text-color)' }}>
                    {products.length} ta mahsulot
                </h2>

                <button 
                    onClick={handleSort}
                    className='flex items-center gap-2 text-blue-500 font-medium hover:text-blue-600 transition-colors'>
                    <RiArrowUpDownLine className="text-xl" />
                    <span>Saralash</span>
                </button>
            </div>

            {/* Mahsulotlar Ro'yxati */}
            <div className="mt-2 space-y-4 pb-10">
                {products.map((product) => {
                    const isOut = product.zaxira === 0

                    return (
                        <div 
                            key={product.id} 
                            className={`flex justify-between items-center rounded-[24px] p-4 shadow-sm transition-all duration-300
                            ${isOut ? "opacity-60 grayscale-[0.5]" : ""}`}
                            style={{ backgroundColor: 'var(--card-bg)' }}>

                            {/* Chap tomon: Rasm va Ma'lumot */}
                            <div className='flex gap-4 items-center'>
                                <div className="relative">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-16 h-16 object-cover rounded-2xl shadow-inner"/>
                                    {isOut && (
                                        <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                                            <span className="text-[10px] text-white font-bold uppercase bg-red-500 px-1 rounded">Yo'q</span>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <h4 className='font-bold text-lg' style={{ color: 'var(--text-color)' }}>
                                        {product.name}
                                    </h4>

                                    {isOut ? (
                                        <p className='text-red-500 text-sm font-medium'>
                                            Zaxirada qolmadi
                                        </p>
                                    ) : (
                                        <p className='text-slate-400 text-sm'>
                                            Zaxirada: 
                                            <span className='ml-1 font-bold' style={{ color: 'var(--text-color)' }}>
                                                {product.zaxira} dona
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* O'ng tomon: Narx va Tahrirlash */}
                            <div className='flex flex-col items-end gap-2'>
                                <p className={`text-lg font-bold ${isOut ? "line-through text-slate-400" : "text-blue-500"}`}>
                                    {product.narx.toLocaleString()} UZS
                                </p>
                                <div className="p-2 bg-[var(--input-bg)] rounded-xl text-slate-500 hover:text-blue-500 cursor-pointer transition-colors">
                                    <BiEdit className="text-xl" />
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Saralash