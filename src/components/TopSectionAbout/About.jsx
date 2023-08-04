
import sawon from "../../assets/images/sawonhossain.jpg";
import "./About.css"

const About = () => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto min-h-screen flex items-center justify-between flex-wrap">
                <div className="">
                    <h2 className="font-semibold text-[32px] text-white">
                        Hello, <br />My name is Sawon Hossain.<br />
                        I am <span className="text-[#C778DD]">Frontend Developer</span> and <br /> {" "} <span className="text-[#C778DD]">Web developer</span>.
                    </h2>
                    <p className="text-[#ABB2BF] my-6">
                        Highly declicated
                        and hardworking.<br /> Most of the time I am busy
                        working <br /> on my HTML,CSS,Javascript
                        and React skills.
                    </p>
                    <button className="text-white font-medium py-2 px-4 duration-200 border border-[#C778DD] hover:bg-[#C778DD33] ">Hire me</button>
                </div>

                <div className="">
                    <div className="">
                    <img src={sawon} alt="" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;



