import { FiUsers } from 'react-icons/fi';
import SectionTitle from "../../../components/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import useTheme from '../../../hooks/useTheme';

const PopularClasses = () => {
    const [classes] = useClasses();
    const { darkTheme } = useTheme();
    const PopularClassesClass = `grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8 ${darkTheme && 'bg-slate-900'}`;
    const PopularClassesCardClass = `card-body ${darkTheme && 'bg-indigo-950 text-white'}`;
    return (
        <>
            <SectionTitle title="Join Now" heading="Popular Classes"></SectionTitle>
            <div className={PopularClassesClass}>
                {
                    classes.slice(0, 6).map(cls => <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={cls.courseThumbnail} /></figure>
                        <div className={PopularClassesCardClass}>
                            <h2 className="text-3xl font-thin">{cls.courseName}</h2>
                            <div className="flex">
                                <p className="text-xl font-bold">${cls.price}</p>
                                <p className="flex items-center gap-1 font-semibold"><FiUsers /> {cls.students}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularClasses;