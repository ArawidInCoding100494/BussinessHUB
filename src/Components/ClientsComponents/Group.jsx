import { FaLocationArrow } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";

const Group = () => {
    return(
        <div className="w-[80%] bg-white flex justify-between items-center mx-auto rounded-[xl]">
            <div className="p-5 w-[80%]">
                <h3 className="font-bold">Qayta jalb qilish</h3>
                <p>Ushbu guruhga oxirgi 15 kunda tashrif buyurmagan</p>
                <button className="flex justify-start items-center pl-3 gap-1 bg-blue-600 text-white p-2 mt-2 rounded-[xl]">
                    <FaLocationArrow />
                    <span>Guruhga yozish</span>
                </button>
            </div>
            <div className="w-[20%] flex justify-center items-center p-7 rounded-md bg-linear-to-br from-[#c5e5f5] to-white ">
                <div className="bg-blue-600">
                    <MdOutlineStackedBarChart  className="text-white w-5 h-5"/>
                </div>
            </div>
        </div>
    )
}

export default Group;