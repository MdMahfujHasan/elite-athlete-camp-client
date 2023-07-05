import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import camp1 from '../../../assets/camp-1.jpg'
import camp2 from '../../../assets/camp-2.jpg'
import camp3 from '../../../assets/camp-3.jpg'
import camp4 from '../../../assets/camp-4.jpg'
import camp5 from '../../../assets/camp-5.jpg'
import camp6 from '../../../assets/camp-6.jpg'
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="relative">
                        <img src={camp1} className="h-screen w-full" />
                        <div className="absolute left-14 top-52">
                            <h3 className="text-3xl md:text-5xl w-2/3 text-slate-700 font-extrabold leading-snug">Forge Lasting Bonds and Unforgettable Memories at Our Elite Athlete Camp</h3>
                            <Link to="/classes">
                                <button className="btn btn-primary mt-4">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={camp2} className="h-screen w-full" />
                        <div className="absolute left-14 top-52">
                            <h3 className="text-3xl md:text-5xl w-2/3 text-white font-extrabold leading-tight">Fuel Your Passion for Sports and Push Your Limits at Our Camp</h3>
                            <button className="btn btn-accent mt-4">Learn How</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={camp3} className="h-screen w-full" />
                        <div className="absolute left-14 top-52">
                            <h3 className="text-3xl md:text-5xl w-2/3 text-white font-extrabold leading-tight">Experience the Power of Teamwork at Our Dynamic Sports Camp</h3>
                            <Link to="/classes">
                                <button className="btn btn-error mt-4">See Classes</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={camp4} className="h-screen w-full" />
                        <div className="absolute left-14 top-52">
                            <h3 className="text-3xl md:text-5xl w-2/3 text-white font-extrabold leading-tight">Master Your Skills in a Fun and Competitive Sports Environment</h3>
                            <button className="btn btn-info mt-4">Watch Videos</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={camp5} className="h-screen w-full" />
                        <div className="absolute left-14 top-52">
                            <h3 className="text-3xl md:text-5xl w-2/3 text-white font-extrabold leading-tight">Get Your Game On at Our Action-Packed Sports Camp</h3>
                            <Link to="/instructors">
                                <button className="btn btn-warning mt-4">See Instructors</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img src={camp6} className="h-screen w-full" />
                        <div className="absolute left-14 top-52">
                            <h3 className="text-3xl md:text-5xl w-2/3 text-white font-extrabold leading-tight">Unleash Your Athletic Potential at Our Thrilling Sports Adventure</h3>
                            <button className="btn btn-success mt-4">Let&rsquo;s Get Started</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;