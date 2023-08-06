
import './Projects.css';
import projects from "../../../public/projects.json"
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard';

const Projects = () => {

    return (
        <>
            <div className='px-5 max-w-[1560px] mx-auto mt-20 py-32'>
                {/* top */}
                <div className='flex justify-between items-center gap-5'>
                    {/* left */}
                    <div className='text-white font-medium text-3xl flex items-center gap-2'>
                        <div className=''>
                            <span className='text-[#C778DD]'>#</span>Projects
                        </div>
                        <div className='line w-2/3 h-px bg-[#C778DD]'></div>
                    </div>
                    {/* right */}
                    <div className='text-white font-medium'>
                        <a href="">
                            <span>View all ~~&gt;</span>
                        </a>
                    </div>
                </div>

                {/* bottom */}
                <div className='flex flex-wrap justify-between gap-4 my-12'>
                    {projects.map((project) => { 
                        return (
                            <>
                                <ProjectsCard  project = {project}></ProjectsCard>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Projects;