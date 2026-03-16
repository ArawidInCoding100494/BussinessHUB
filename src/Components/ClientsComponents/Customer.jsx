import { IoMdPersonAdd } from "react-icons/io";

const Customer = () => {
    const mijozlar = [
        {
            id: 1,
            name:"Ali",
            surname: "Valiyev",
            number: "+998 90 780 90 79",
            day: "bugun",
            hour: "12:34" 
        },
        {
            id: 2,
            name:"Ali",
            surname: "Valiyev",
            number: "+998 90 780 90 79",
            day: "bugun",
            hour: "12:34" 
        },
        {
            id: 3,
            name:"Ali",
            surname: "Valiyev",
            number: "+998 90 780 90 79",
            day: "bugun",
            hour: "12:34" 
        },
        {
            id: 3,
            name:"Ali",
            surname: "Valiyev",
            number: "+998 90 780 90 79",
            day: "bugun",
            hour: "12:34" 
        },
    ]
    return(
        <div className="bg-[#f5f7f8]">
            <div className="w-[80%] pt-5 mx-auto flex justify-between items-center">
                <p className="font-bold">Mijozlar ro`yhati</p>
                <p className="">Jami: <span>{mijozlar.length}</span>ta</p>
            </div>
            <div className="space-y-3 w-[80%] mx-auto   p-5 rounded-[20px]">
                {mijozlar.map((mijoz) => (
                    <div className="flex justify-center items-center gap-4 my-3 bg-white p-5 rounded-3xl ">
                        <div className="w-16 h-16 font-bold  rounded-full bg-linear-to-br flex justify-center items-center from-[#93d3f4] to-white ">
                            <span className="text-blue-700 uppercase ">
                                {mijoz.name.charAt(0)}{mijoz.surname.charAt(0)}
                            </span>
                        </div>
                        <div className="flex-1">
                            <p className="font-bold text-xl">{mijoz.name} {mijoz.surname}</p>
                            <p className="text-gray-400">{mijoz.number}</p>
                        </div>
                        <div>
                            <p className="text-gray-400">OXIRGI TASHRIF</p>
                            <p>{mijoz.day}, {mijoz.hour}</p>
                        </div>
                    </div>))}
            </div>
           <div className="flex justify-end pr-[20%] mt-4"> 
                <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-600 shadow-lg cursor-pointer active:scale-95 transition-transform">
                    <IoMdPersonAdd className="text-white text-xl" />
                </div>
            </div>         
        </div>
    )
}

export default Customer;