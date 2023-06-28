import SectionTitle from "../../components/SectionTitle";
import useDetailedClasses from "../../hooks/useDetailedClasses";
import ClassCard from "./ClassCard";

const Classes = () => {
    const [classes] = useDetailedClasses();
    console.log(classes)
    return (
        <>
            <SectionTitle title="All Courses" heading="Every Classes"></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-8 gap-8">
                {
                    classes.map(cls => <ClassCard key={cls._id} cls={cls}></ClassCard>)
                }
            </div>
        </>
    );
};

export default Classes;