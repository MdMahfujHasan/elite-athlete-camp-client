import { Helmet } from "react-helmet-async";

const UserHome = () => {
    return (
        <>
            <Helmet>
                <title>Home - EAC</title>
            </Helmet>
            <div>
                <h3 className="text-center text-xl p-8">User home coming soon...</h3>

                <div className="flex justify-center gap-4 text-white">
                    <div className="card w-96 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>

                    <div className="card w-96 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>

                    <div className="card w-96 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserHome;