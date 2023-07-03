import { useLoaderData } from "react-router-dom";

const InstructorClasses = () => {
    const instructorClasses = useLoaderData();
    const { name, email, img, students, classes, classesTaken } = instructorClasses;
    return (
        <div className="hero min-h-96 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="avatar">
                    <div className="w-52 rounded-full ring ring-violet-600 ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-violet-700">{name}</h1>
                    <div className="flex gap-4 flex-col lg:flex-row items-center">
                        <p className="py-6"><b>Email:</b> <span className="text-violet-600">{email}</span></p>
                        <p><b>Students:</b> <span className="badge badge-primary">{students}</span></p>
                        <p><b>Classes Taken:</b> <span className="badge badge-primary">{classesTaken}</span></p>
                    </div>
                    <div>
                        <p>
                            {
                                classes.map((cls, index) => <span key={index} className="badge badge-primary badge-outline m-1">{cls}</span>)
                            }
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructorClasses;