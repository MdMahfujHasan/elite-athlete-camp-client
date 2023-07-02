import useTheme from "../../../hooks/useTheme";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    const { darkTheme } = useTheme();
    const homeClass = `${darkTheme && "bg-indigo-950"}`;

    return (
        <div className={homeClass}>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;