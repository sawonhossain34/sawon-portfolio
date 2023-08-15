import sawon from '../../assets/images/sawonhossain.jpg'

const Skills = () => {
    const skills = [
        { title: "Language", languages: ["javascript"] },
        { title: "Database", languages: ["MongoDb"] },
        { title: "Tools", languages: ["VScode", "Git", "Github", "Figma", "Photopia"] },
        { title: "Other", languages: ["html", "css", "bootstrap css", "tailwind css", "Font Awesome"] },
        { title: "Frameworks", languages: ["react", "daisyui", "Express js"] },
    ]
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
                {/* top */}
                <div className="mb-10">
                    <div className="text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                        <div className=" text-[#C778DD]">
                            <span>#</span>Skills
                        </div>
                        <div className="line w-1/3 h-px bg-[#C778DD]"></div>
                    </div>
                </div>
                {/* botton */}
                <div className="flex flex-wrap gap-10 justify-between items-center text-white">
                    {/* left */}
                    <div className="mx-auto">
                        <img className='w-full' src={sawon} alt="" />
                    </div>
                    {/* right and map */}
                    <div className='flex mx-auto justify-around md:justify-end flex-wrap w-10/12 md:w-1/2 gap-4 '>
                        {skills.map(({ title, languages}) => {
                            return <>
                                <div className='w-[90%] sm:w-[45%] lg:w-[30%] border border-[#ABB2BF] text-white'>
                                    <div className='p-2'>
                                        <h2 className='font-semibold'>{title}</h2>
                                    </div>
                                    <div className='flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[]'>
                                        {languages.map((lang) => {
                                            return <>
                                                <span>
                                                    {lang}
                                                </span>
                                            </>
                                        })}
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;