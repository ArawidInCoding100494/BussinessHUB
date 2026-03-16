import { IoPerson } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
const Navbar = () => {
    return(
        <div className="w-full p-5 text-lg flex h-16 justify-between">
            <div className="flex justify-between items-center gap-2">
                <IoPerson className="text-blue-600"/>
                <p className="font-bold">Mijozlar Bazasi</p>
            </div>
            <BsThreeDotsVertical className="text-blue-600" />
        </div>
    )
}   

export default Navbar;