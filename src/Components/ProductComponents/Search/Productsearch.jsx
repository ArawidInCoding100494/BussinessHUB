import { FaSearch } from "react-icons/fa";

const Productsearch = () => {
    return (
        <div className="flex justify-center px-2 my-4">
            <div className="relative w-full">
                
                {/* Qidiruv ikonkasining o'rni va rangi */}
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <FaSearch className="text-slate-400 dark:text-slate-500" />
                </div>

                {/* Sizning CSS-dagi .inp klassingizdan foydalanamiz. 
                   U yerda fon var(--input-bg) va matn var(--text-color) deb belgilangan.
                */}
                <input
                    type="text"
                    placeholder="Mahsulotni qidirish..."
                    className="inp pl-12 py-3 shadow-sm transition-all duration-300" 
                />

            </div>
        </div>
    );
};

export default Productsearch;