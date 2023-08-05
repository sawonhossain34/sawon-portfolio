

const ProjectsCard = ({project}) => {
    const {img, language, title, disc} = project;
    return (
        <>
            <div className="border border-[#ABB2BF] p-0">
                {/* img  */}
                <div>
                    <img src={img} alt="" />
                </div>
                {/* skills */}
                <div className="flex gap-2 p-2 border-y border-[#ABB2BF]">
                    {language.map((lan, index) => {
                        return <span key={index}>{lan}</span>;
                    })}
                </div>
                {/* disc */}
                <div>
                    <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
                    <p className="py-4 text-[#ABB2BF]">{disc}</p>
                    {/* btn */}
                    <div className="">
                        <button className="py-2 px-4 button button-[#C778DD] hover:bg-[#C778DD33] duration-150">Live {"<"}~{">"}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsCard;