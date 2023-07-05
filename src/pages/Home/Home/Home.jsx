import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonials from "../Testimonials/Testimonials";
import PricingAndPackages from "../PricingAndPackages/PricingAndPackages";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Elite Athlete Camp</title>
            </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <PricingAndPackages></PricingAndPackages>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;