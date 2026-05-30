import NavBar from "../components/NavBar";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import{Link} from "react-router-dom";
function Home() {
    return (
        <div className="page-shell home-page">
<NavBar />
<section className="hero">
      <div className="container hero-content">
        <h3>Discover the World of Flavors</h3>
        <p>
        Welcome to Set Fire, 
        where we ignite your taste buds with a fiery fusion of flavors. 
        Our menu is crafted to tantalize your senses and take you on a culinary adventure like no other.
        From sizzling appetizers to mouthwatering main courses, every dish is a masterpiece of bold spices and vibrant ingredients.
        Whether you're craving a spicy kick or a savory delight, Set Fire has something to satisfy every palate.
        Join us and experience the heat of our kitchen as we set your dining experience on fire!
        </p>
        <Link to="/Menu" className="btn btn-primary btn-lg hero-cta">Explore Our Menu</Link>
      </div>
    </section>
        </div>
    );
}   
export default Home;
