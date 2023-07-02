import bg from '../../assets/not-found.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { BsJournalBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url(${bg})` }}>
            <div className="text-center">
                <h1 className="text-9xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">404</h1>
                <p className="text-3xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Not Found</p>
                <Link to="/">
                    <button className="btn btn-sm mt-2 mr-2 btn-primary text-white"><FiArrowLeft class="text-lg" />Home</button>
                </Link>
                <Link to="/classes">
                    <button className="btn btn-sm btn-accent text-white"><BsJournalBookmark className="text-lg" />Classes</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
