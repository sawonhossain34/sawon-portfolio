
import sawon from "../../assets/images/sawonhossain.jpg";
import "./About.css"

const About = () => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto min-h-screen pt-20 flex items-center justify-between flex-wrap">
                <div className="w-10/12 sm:w-8/12 mx-auto ">
                    <h2 className="font-semibold text-[32px] text-white">
                        Hello, <br />My name is Sawon Hossain.
                        I am <br /><span className="text-[#C778DD]">Frontend Developer</span> and {" "} <span className="text-[#C778DD]">Web developer</span>.
                    </h2>
                    <p className="text-[#ABB2BF] my-6">
                        Highly declicated
                        and hardworking.<br /> Most of the time I am busy
                        working on my HTML,CSS,Javascript
                        and React skills.
                    </p>
                    <div className="flex items-center flex-wrap gap-2">
                    <button className="text-white font-medium py-2 px-4 duration-200 border border-[#C778DD] hover:bg-[#C778DD33] ">Download Resume</button>
                    <button className="text-white font-medium py-2 px-4 duration-200 border border-[#C778DD] hover:bg-[#C778DD33] ">Hire me !!</button>
                    </div>
                </div>

                <div className=" mx-auto sm:pt-10">
                    <div className="">
                    <img src={sawon} alt="" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;



