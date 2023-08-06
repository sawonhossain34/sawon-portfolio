

const ProjectsCard = ({ project }) => {
    const { img, language, title, disc } = project;
    return (
        <>
            <div className="border w-[95%] mx-auto mt-2 md:w-[45%] lg:w-[30%] border-[#ABB2BF] p-0">
                {/* img  */}
                <div  style={{ width: "100%" }}>
                    <img className="w-full" src={img} alt="" style={{
                        height: "200px",
                    }} />
                </div>
                {/* skills */}
                <div className="flex gap-2 p-2 flex-wrap border-y border-[#ABB2BF]">
                    {language.map((lan, index) => {
                        return <span className="text-[#ABB2BF]" key={index}>{lan}</span>;
                    })}
                </div>
                {/* disc */}
                <div>
                    <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
                    <p className="py-4 text-[#ABB2BF]">{disc}</p>
                    {/* btn */}
                    <div className="">
                        <button className="py-2 px-4 text-white button button-[#C778DD] hover:bg-[#C778DD33] duration-150">Live {"<"}~{">"}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsCard;