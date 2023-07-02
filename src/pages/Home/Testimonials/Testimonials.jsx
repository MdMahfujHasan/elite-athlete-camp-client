import SectionTitle from "../../../components/SectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
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
                <div>
                    {
                        testimonials.map(testimonial => <SwiperSlide key={testimonial._id}>
                            <div className="card glass relative">
                                <figure><img src={testimonial.img} /></figure>
                                <FaQuoteLeft className="absolute text-7xl left-96 bottom-40 text-indigo-700 invisible xl:visible" />
                                <div className="card-body">
                                    <p className="font-serif text-slate-500">{testimonial.message}</p>
                                    <h2 className="text-2xl text-slate-800 font-medium">{testimonial.name}</h2>
                                    <p className="text-sm text-slate-500"><em>{testimonial.designation}</em></p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Testimonials;