import { FaSearch } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

function AiSearch() {
    return (
        <div className="w-full">
            <div className="w-full h-[px] bg-[#c5e5f5] shadow-sm-[0_0_2px_rgba(0,0,0,0.3)] "></div>
            <div className="relative w-[80%] mx-auto mt-5">
                
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <FaSearch className="text-blue-600" />
                </div>

                <input 
                    type="text"
                    placeholder='Mijozlarni qidirish...' 
                    className="bg-[#cfeaf871] w-full rounded-[20px] p-2 pl-11   outline-none focus:border-blue-500" 
                />
            </div>
            <div className="flex justify-start text-blue-600 pl-5 mt-5 font-bold">
                <BsStars />
                <p>AI TAKLIFLAR</p>
            </div>

        </div>
    );
}

export default AiSearch;