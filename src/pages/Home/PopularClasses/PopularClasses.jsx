import { FiUsers } from 'react-icons/fi';
import SectionTitle from "../../../components/SectionTitle";
import useClasses from "../../../hooks/useClasses";
// import { AiOutlinePlus } from 'react-icons/ai';

const PopularClasses = () => {
    const [classes] = useClasses();
    return (
        <>
            <SectionTitle title="Join Now" heading="Popular Classes"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8">
                {
                    classes.slice(0, 6).map(cls => <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={cls.courseThumbnail} /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-thin">{cls.courseName}</h2>
                            <div className="flex">
                                <p className="text-xl text-slate-700 font-bold">${cls.price}</p>
                                <p className="flex items-center gap-1 font-semibold"><FiUsers /> {cls.students}</p>
                            </div>
                            {/* <div className="card-actions mt-4 justify-end">
                                <button className="btn btn-xs border border-slate-400 hover:border-slate-500"><AiOutlinePlus />Add Class</button>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularClasses;