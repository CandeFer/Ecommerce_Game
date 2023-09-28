import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h5>Not Found</h5>
            <button><Link className='home' to={`/`}>Home</Link></button>
        </div>
    );
};

export default NotFound;