import { useState } from "react";
import logo from "../../components/imgs/logo.jpg";
import close from "../imgs/close (1).jpg";
const Navber = () => {
    const [toggle , setToggle] = useState(true)
    return (
        <div className="fixed top-0 right-0 left-0 bg-[#282C33]">
            <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between my-2 pt-6">
                <div className="left flex gap-2 items-center font-bold text-white text-base">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    Sawon Hossain
                </div>

                <div className="right flex items-center">
                    <div className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? 'right-[-100%] top-0 bottom-0' : 'right-0 top-0 bottom-0'}  bg-[#282C33] md:static`}>
                        <a href="#"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Home</li></a>
                        <a href="#"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Works</li></a>
                        <a href="#"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>About</li></a>
                        <a href="#"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Contact</li></a>

                        <div onClick={() => setToggle(false)} className="close absolute block md:hidden right-3 top-3">
                            <img src={close} alt="" />
                        </div>
                    </div>
                    {/* close & open btn */}
                    <div onClick={()=> setToggle(true)} className="">
                        <div className=" open block md:hidden w-8">
                            <div className="w-full h-[3px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                            <div className="w-full h-[2px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                            <div className="w-full h-[1px] my-2 rounded-r-3xl bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;