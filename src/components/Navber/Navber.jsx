import logo from "../../components/imgs/logo.jpg"
const Navber = () => {
    return (
        <div className="fixed top-0 right-0 left-0 bg-[#282C33]">
            <div className="max-w-[1560px] mx-auto flex items-center justify-between my-2 pt-6">
                <div className="left flex gap-2 items-center font-bold text-white text-base">
                    <div className="img">
                        <img src={logo} alt="" />
                    </div>
                    Sawon Hossain
                </div>

                <div className="right flex items-center">
                    <div className="menu flex">
                        <a href="#"><li className="text-[#ABB2BF] list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Home</li></a>
                        <a href="#"><li className="text-[#ABB2BF] list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Works</li></a>
                        <a href="#"><li className="text-[#ABB2BF] list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>About</li></a>
                        <a href="#"><li className="text-[#ABB2BF] list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Contact</li></a>
                    </div>
                    {/* close & open btn */}
                    <div className="">
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;