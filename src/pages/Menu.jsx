import Bowls from "./Bowls";
import NavBar from "../components/NavBar";
import Burger from "./Burger";
import SetFireImage from "../Photos/SetFire.png";
import "bootstrap/dist/css/bootstrap.min.css";  
import { useNavigate } from "react-router-dom";
function Menu() {
    const navigate = useNavigate();
    return (
        <div className=" menu-page">
            <NavBar />
            <div className="container page-content">
                <div className="menu-sticker-wrap">
                  <img src={SetFireImage} alt="Set Fire" className="menu-sticker" />
                </div>
                <h4 className="text-center my-0">Our Menu</h4>
                <section className="menu-section-heading d-flex justify-content-between align-items-center my-4">
                <h4 className="mb-(-1)">Bowls</h4>
                <button type="button" className="btn-more" onClick={()=>navigate("/Bowls")}>See more Bowls</button>
                </section>
                <Bowls embedded limit={3} />

                <section className="menu-section-heading d-flex justify-content-between align-items-center my-4">
                <h4 className="mb-(-1)">Burgers</h4>
                <button type="button" className="btn-more" onClick={()=>navigate("/Burgers")}>See more Burgers</button>
                </section>
                <Burger embedded limit={3} />
            </div>
        </div>

    );
}   
export default Menu;
