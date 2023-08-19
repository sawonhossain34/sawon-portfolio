

import sawon from "../../assets/images/sawonhossain.jpg"

const AboutMe = () => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
                {/* buttom */}
                <div className="flex flex-wrap items-center justify-between">
                    {/* left */}
                    <div className=" md:w-[48%] w-full">
                        <div className="mb-10">
                            <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                                <div>
                                    <span className=" text-[#C778DD]">#</span>about-me
                                </div>
                                <div className="line w-1/3 h-px bg-[#C778DD]"></div>
                            </div>
                        </div>
                        {/* dec */}
                        <p className="text-[#ABB2BF]">Hello, i am sawon hossain!
                            <br />
                            <br />
                            I am a frontend developer with a passion for creating visually stunning and user-friendly web experiences. 
                            <br />
                            <br />
                            With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and intuitive interfaces that engage and delight users.
                        </p>
                        {/* button */}
                        <div className="mt-7">
                            <a href="" className="hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white">
                                <button>Read more -{">"}</button>
                            </a>
                        </div>
                    </div>
                    {/* right */}
                    <div className="mx-auto">
                        <img className="mx-auto" src={sawon} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;