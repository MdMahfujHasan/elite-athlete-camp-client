import { Helmet } from "react-helmet-async";
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import useDetailedClasses from "../../../hooks/useDetailedClasses";
import SectionTitle from "../../../components/SectionTitle";

const AdminHome = () => {
    const [classes] = useDetailedClasses();

    return (
        <>
            <Helmet>
                <title>Home - EAC</title>
            </Helmet>
            <div>
                <SectionTitle title="Students" heading="Classes Stats"></SectionTitle>
                <BarChart width={1200} height={300} data={classes} className="mt-12">
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="students" barSize={30} fill="#8884d8" />
                    <Bar dataKey="availableSeats" barSize={30} fill="#78d1d1" />
                </BarChart>
            </div>
        </>
    );
};

export default AdminHome;
