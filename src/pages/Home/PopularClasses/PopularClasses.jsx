import { useEffect, useState } from "react";
import { FiUsers } from 'react-icons/fi';
import SectionTitle from "../../../components/SectionTitle";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <>
            <SectionTitle title="Join Now" heading="Popular Classes"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    classes.slice(0, 6).map(cls => <div key={cls._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={cls.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl text-violet-500 font-serif font-extralight">{cls.name}</h2>
                            <div className="flex justify-between">
                                <p className="text-2xl text-violet-500 font-extrabold">${cls.price}</p>
                                <p className="flex items-center gap-1 font-semibold"><FiUsers /> {cls.students}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-xs btn-success">Join Now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </>
    );
};

export default PopularClasses;