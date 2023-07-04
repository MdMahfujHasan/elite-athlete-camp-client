import { FiUsers } from "react-icons/fi";
import SectionTitle from "../../../components/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import useTheme from "../../../hooks/useTheme";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    const { darkTheme } = useTheme();
    const PopularClassesClass = `grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8 ${darkTheme && 'bg-slate-900'}`;
    const PopularClassesCardClass = `card-body ${darkTheme && 'bg-indigo-950 text-white'}`;
    return (
        <>
            <SectionTitle title="Our Classes" heading="Popular Instructors"></SectionTitle>
            <div className={PopularClassesClass}>
                {
                    instructors.slice(0, 6).map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={instructor.img} /></figure>
                        <div className={PopularClassesCardClass}>
                            <h2 className="text-3xl font-thin">{instructor.name}</h2>
                            <p className="flex items-center gap-1 font-semibold"><FiUsers /> {instructor.students}</p>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularInstructors;