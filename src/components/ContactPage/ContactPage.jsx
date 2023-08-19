// import { FaDiscord } from 'react-icons/fa';
import gmail from "../../assets/images/Gmail.jpg"
import discord from "../../assets/images/discordImage.png"

const ContactPage = () => {
    return (
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
            {/* header */}
            <div>
                {/* Top */}
                <div className="mb-12">
                    <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                        <div className=" ">
                            <span className=" text-[#C778DD]">#</span>Contact
                        </div>
                        <div className="line w-1/3 h-px bg-[#C778DD]"></div>
                    </div>
                </div>
            </div>
            {/* bottom  */}
            <div className="flex items-start flex-wrap gap-10 justify-between">
                {/* left */}
                <div className="left w-full md:w-1/2 text-[#ABB2BF]">
                    <p>
                        I am interested in freelance oppertunities.However, If you have other request or question, do not hesitate to contact me
                    </p>
                </div>
                {/* right */}
                <div className="mx-auto">
                    {/* box */}
                    <div className="border border-[#ABB2BF] p-4">
                        <h2 className="mb-4 text-white font-semibold">Message me here</h2>
                        {/* get in touch */}
                        <div className="">
                            {/* link */}
                            <div className="flex gap-2 items-center pb-4">
                                <img className="w-6 h-6" src={discord} alt="" />
                                <span className="text-[#ABB2BF] flex justify-center items-center gap-4" > sawonhossain_00149</span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <img className='w-6 h-6' src={gmail} alt="" />
                                <span className="text-[#ABB2BF]" >sawon4942@gmail.com</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactPage;