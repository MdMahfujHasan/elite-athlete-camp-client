import SectionTitle from "../../../components/SectionTitle";
import { FaCheck, FaStar } from 'react-icons/fa';

const PricingAndPackages = () => {
    return (
        <div>
            <SectionTitle title="Choose One" heading="Pricing And Packages"></SectionTitle>
            <div className="flex flex-col lg:flex-row gap-4 justify-center items-center lg:p-4">
                <div className="card w-96 border bg-slate-100">
                    <div className="card-body">
                        <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-center p-4 rounded">
                            <h2 className="text-3xl">Basic</h2>
                            <p className="font-semibold font-sans">$23.99/month</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-2xl" />
                                <p className="text-slate-400">Access to Football (Soccer), Table Tennis, and Badminton classes</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Duration: 1 month</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Group training sessions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Certified instructors</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Basic sports equipment provided</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Access to camp facilities during training sessions</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600 hover:to-blue-700 text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border bg-slate-100">
                    <div className="card-body">
                        <div className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-center p-4 rounded">
                            <div className="flex items-center justify-center bg-white text-amber-400 rounded-full w-2/3 mx-auto">
                                <FaStar />
                                <span className="font-bold text-sm px-2.5 py-1">Recommended</span>
                            </div>
                            <h2 className="text-3xl">Standard</h2>
                            <p className="font-semibold font-sans">$20.99/month</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-3xl" />
                                <p className="text-slate-400">Access to Football (Soccer), Table Tennis, Martial Arts, Archery, and Badminton classes</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Duration: 6 months</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Group and individual training sessions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Experienced and specialized instructors</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Premium sports equipment provided</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Access to camp facilities during training sessions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Participation in friendly tournaments and competitions</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600 hover:to-amber-700 text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 border bg-slate-100">
                    <div className="card-body">
                        <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white text-center p-4 rounded">
                            <h2 className="text-3xl">Premium</h2>
                            <p className="font-semibold font-sans">$18.99/month</p>
                        </div>
                        <div>
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Access to all sports classes offered at the camp</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Duration: 1 year</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-lg" />
                                <p className="text-slate-400">Intensive group and individual training sessions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Elite-level instructors with professional experience</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4" />
                                <p className="text-slate-400">Premium sports equipment provided</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Access to camp facilities during training sessions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Participation in high-level tournaments and competitions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-xl" />
                                <p className="text-slate-400">Specialized workshops and guest coaching sessions</p>
                            </div>
                            <hr className="my-2" />
                            <div className="flex items-center justify-around">
                                <FaCheck className="text-green-400 mr-4 text-lg" />
                                <p className="text-slate-400">Customized training plans and assessments</p>
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn w-full rounded-full bg-gradient-to-r from-purple-400 to-purple-600 hover:to-purple-700 text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PricingAndPackages;