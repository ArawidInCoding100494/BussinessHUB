import React from 'react';
import { MdLibraryBooks } from "react-icons/md";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-3 py-5 transition-colors duration-300"
             style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-color)' }}>
            
            {/* Chap tomon: Logo va Nom */}
            <div className="flex justify-center items-center gap-2">
                {/* Ikonka foni dark modeda yumshoqroq ko'rinishi uchun dark: klassi qo'shildi */}
                <div className="text-blue-600 dark:text-blue-400 text-2xl bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 transition-all">
                    <MdLibraryBooks />
                </div>
                <p className="font-bold text-2xl tracking-tight">BusinessHub</p>
            </div>

            {/* O'ng tomon: Qo'shish tugmasi */}
            <div className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full p-3 cursor-pointer shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-95 mr-12">
                <GoPlus className="text-white text-xl" />
            </div>
        </div>
    )
}

export default Navbar;