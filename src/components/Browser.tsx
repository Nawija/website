import { FaLock } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function Browser() {
    return (
        <div className="w-[88vw] h-[80vw] max-h-[800px] border wrapper bg-black/20 rounded-xl backdrop-blur-md relative">
            <div className="flex items-center justify-between p-2 border-b">
                <div className="flex space-x-1 lg:space-x-2 ">
                    <div className=" h-2.5 lg:h-3 w-2.5 lg:w-3 bg-red-500/90 rounded-full" />
                    <div className=" h-2.5 lg:h-3 w-2.5 lg:w-3 bg-yellow-500/90 rounded-full" />
                    <div className=" h-2.5 lg:h-3 w-2.5 lg:w-3 bg-green-500/90 rounded-full" />
                </div>
                <div className="bg-white/5 w-full max-w-[40vw] mx-3 text-xs lg:text-sm lg:mx-12 p-1 rounded-xl flex items-center justify-center">
                    <FaLock size={12} />
                    <p className="ml-2">https/seovileo.pl</p>
                </div>
                <div className="p-1 bg-white/10 rounded-full">
                    <IoIosArrowDown size={14} />
                </div>
            </div>
        </div>
    );
}
