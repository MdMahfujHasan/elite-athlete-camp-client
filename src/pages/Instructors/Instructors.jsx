import { FiUsers } from "react-icons/fi";
import SectionTitle from "../../components/SectionTitle";
import useInstructors from "../../hooks/useInstructors";
import { FcSportsMode } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa';

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
        <>
            <SectionTitle title="Every Classes" heading="All Instructors"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8">
                {
                    instructors.map(instructor => <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={instructor.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-thin">{instructor.name}</h2>
                            <div className="flex">
                                <p><b>Email:</b> {instructor.email}</p>
                                <p className="flex items-center gap-1 font-semibold"><FiUsers /> {instructor.students}</p>
                            </div>
                            <div className="space-x-1">
                                <p className="badge badge-outline gap-1">
                                    <FcSportsMode />
                                    <b>{instructor.classesTaken}</b> classes taken
                                </p>
                                {instructor.classes.map(cls => (
                                    <p className="badge badge-primary badge-outline text-white" key={cls}>{cls}</p>
                                ))}
                            </div>
                            <div className="card-actions mt-4 justify-end">
                                <button className="btn btn-xs btn-accent"><FaUsers />See Classes</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Instructors;