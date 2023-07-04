import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from 'react-icons/fa';
import useTheme from "../../../hooks/useTheme";

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const { darkTheme } = useTheme();
    useEffect(() => {
        fetch('https://elite-athlete-camp-server.vercel.app/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <div>
            <SectionTitle title="What Parents Say" heading="Testimonials"></SectionTitle>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                        <div className="card glass relative">
                            <figure><img src={testimonial.img} className="max-h-96" /></figure>
                            <FaQuoteLeft
                                className={`absolute text-7xl left-96 bottom-40 invisible xl:visible
                                ${darkTheme ? "text-indigo-700" : "text-slate-700"}`} />
                            <div className="card-body">
                                <p
                                    className={`font-serif text-slate-500 
                                    ${darkTheme && "text-white"}`}>
                                    {testimonial.message}
                                </p>
                                <h2
                                    className={`text-2xl text-slate-800 font-medium 
                                    ${darkTheme && "text-white"}`}>
                                    {testimonial.name}
                                </h2>
                                <p
                                    className={`text-sm text-slate-500 
                                    ${darkTheme && "text-white"}`}>
                                    <em>{testimonial.designation}</em>
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;