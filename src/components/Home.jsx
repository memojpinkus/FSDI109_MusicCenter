import "./Home.css";
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <div className="home-page">
            <div class="container">
                <img src="./imgs/mbv.jpg" alt="" />
                <Link to="/catalog" className="btn btn-info">
                Check out our catalog
                </Link>
            </div>

            
        </div>
    );
};

export default Home;