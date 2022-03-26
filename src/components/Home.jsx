import "./Home.css";
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div className="home-page">
            <h1>MusicCenter</h1>
            <h4>Everything music</h4>

            <Link to="/catalog" className="btn btn-info">
                Check out our catalog
            </Link>
        </div>
    );
};

export default Home;