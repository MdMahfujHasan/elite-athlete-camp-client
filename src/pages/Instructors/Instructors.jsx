import { FiUsers } from "react-icons/fi";
import SectionTitle from "../../components/SectionTitle";
import useInstructors from "../../hooks/useInstructors";
import { FcSportsMode } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa';
import useTheme from "../../hooks/useTheme";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors] = useInstructors();
    const { darkTheme } = useTheme();
    const PopularClassesClass = `grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8 ${darkTheme && 'bg-slate-900'}`;
    const PopularClassesCardClass = `card w-96 shadow-xl ${darkTheme ? 'bg-indigo-950 text-white' : "bg-base-100"}`;
    return (
        <>
            <Helmet>
                <title>Instructors - EAC</title>
            </Helmet>
            <SectionTitle title="Every Classes" heading="All Instructors"></SectionTitle>
            <div className={PopularClassesClass}>
                {
                    instructors.map(instructor => <div key={instructor._id} className={PopularClassesCardClass}>
                        <figure><img src={instructor.img} /></figure>
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
                                    <p className={`badge badge-outline text-white ${darkTheme ? "badge-info" : "badge-primary"}`} key={cls}>{cls}</p>
                                ))}
                            </div>
                            <div className="card-actions mt-4 justify-end">
                                <Link to={`/instructors/${instructor._id}`}>
                                    <button className="btn btn-sm btn-success text-white"><FaUsers />See Classes</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default Instructors;