import { FiUsers } from "react-icons/fi";
import SectionTitle from "../../../components/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import { AiOutlinePlus } from "react-icons/ai";

const PopularInstructors = () => {
    const [instructors] = useInstructors();
    return (
        <>
            <SectionTitle title="Our Classes" heading="Popular Instructors"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8">
                {
                    instructors.slice(0, 6).map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={instructor.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-thin">{instructor.name}</h2>
                            <p className="flex items-center gap-1 font-semibold"><FiUsers /> {instructor.students}</p>
                            <div className="card-actions mt-4 justify-end">
                                <button className="btn btn-xs border border-slate-400 hover:border-slate-500"><AiOutlinePlus />See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularInstructors;